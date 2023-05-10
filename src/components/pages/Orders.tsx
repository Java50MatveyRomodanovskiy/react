import { useSelector } from "react-redux"
import { OrderType } from "../../model/OrderType";
import { Alert, Avatar, Box, Snackbar, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRef, useState } from "react";
import { ordersService } from "../../config/order-service-config";


export const Orders: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const alertMessage = useRef<string>('');
    const [visibleOrderID, setVisibleOrderID] = useState<string>('');
    const authUser = useSelector<any, string>(state => state.auth.authUser);
    const orders = useSelector<any, OrderType[]>(state => state.ordersState.orders);
    const orderColumns: GridColDef[] = [
        {
            field: "image", headerName: '', flex: 0.3, editable: true,
            renderCell: (params) => <Avatar
                src={params.value.startsWith("http") || params.value.length > 40 ? params.value : `images/${params.value}`}
                sx={{ width: "90%", height: "80px" }} />, align: "center", headerAlign: "center",
        },
        { field: "title", headerName: 'Title', flex: 0.8 },
        { field: "category", headerName: "Category", flex: 0.5 },
        { field: "unit", headerName: "Unit", flex: 0.4 },
        { field: "cost", headerName: "Cost (ILS)", flex: 0.3, editable: true, type: 'number' },
    ]

    const columns: GridColDef[] = [
        { field: "id", headerName: 'id', flex: 0.3 },
        { field: "email", headerName: 'email', flex: 0.8 },
        { field: "orderDate", headerName: "orderDate", flex: 0.5, valueFormatter: params => 
        new Date (params.value.seconds*1000).toISOString().substring(0,10) },
        
        { field: "deliveryDate", headerName: "deliveryDate", valueFormatter: params => 
        params.value ? new Date (params.value.seconds*1000).toISOString().substring(0,10): params.value , editable: authUser.includes('admin') ? true : false, flex: 0.4, type: 'date'},
        // { field: "cost", headerName: "Cost (ILS)", flex: 0.3, true, type: 'number' },
        {
            field: 'actions', type: 'actions', flex: 0.1, getActions: (params) => [
                <GridActionsCellItem label="show order" icon={<VisibilityIcon></VisibilityIcon> }
                    onClick={() =>  
                        setVisibleOrderID(params.id as string)
        
                    
                    }
                />
            ]
        }
    ]
    async function updateDateDelivery(newRow: any, oldRow: any): Promise<any> {
        const rowData: OrderType = newRow;
        const today = new Date();
        const dateDelivery : Date = rowData.deliveryDate as Date;
        if (today.toISOString().substring(0,10).localeCompare(dateDelivery.toISOString().substring(0,10)) > 0)  {
            throw 'new date delivered cannot be in the past'
        }
       await ordersService.setOrder(rowData)
       return newRow;
    }
    return <Box>
        <DataGrid columns={columns} rows={orders} getRowHeight={() => 'auto'}
        processRowUpdate={updateDateDelivery}
        onProcessRowUpdateError={(error) => {
            alertMessage.current = error;
            setOpen(true)
        }} />
         <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert severity="error" sx={{ width: '30vw', fontSize: '1.5em' }}>
                {alertMessage.current}
            </Alert>
        </Snackbar>
        {visibleOrderID && <DataGrid columns={orderColumns} rows={orders.find(o => o.id == visibleOrderID)!.shopping} getRowHeight={() => 'auto'}/>}
    </Box>
}


