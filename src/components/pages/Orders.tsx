import { useSelector } from "react-redux"
import { OrderType } from "../../model/OrderType";
import { Alert, Avatar, Box, Modal, Snackbar, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRef, useState } from "react";
import { ordersService } from "../../config/order-service-config";
import { OrderContent } from "../OrderContent";
import { LocalShipping } from "@mui/icons-material";
export const Orders: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const handleClose = () => setVisible(false);
    const [open, setOpen] = useState<boolean>(false);
    const alertMessage = useRef<string>('');
    const [visibleOrderID, setVisibleOrderID] = useState<string>('');
    const authUser = useSelector<any, string>(state => state.auth.authUser);
    const orders = useSelector<any, OrderType[]>(state => state.ordersState.orders);
    const columns: GridColDef[] = [
        { field: "id", headerName: 'Order id', flex: 0.3 },
        { field: "email", headerName: 'Customer email', flex: 0.5 },
        { field: "productsAmount", headerName: 'Products amount', flex: 0.3 },
        { field: "totalCost", headerName: 'Order cost', flex: 0.3 },
        { field: "orderDate", headerName: "Order Date", flex: 0.5 },       
        { field: "deliveryDate", headerName: "Delivery Date", 
        valueFormatter: params => params.value ? params.value : params.value, 
        editable: authUser.includes('admin') ? true : false, flex: 0.4, type: 'date'},
        {
            field: 'actions', type: 'actions', flex: 0.1, getActions: (params) => authUser.includes('admin') ? [
                   <GridActionsCellItem label="delivery" icon={<LocalShipping />}
                disabled={params.row.deliveryDate}
                   onClick={async () => await updateDateDelivery(params.row)}></GridActionsCellItem>,
                <GridActionsCellItem label="show order" icon={<VisibilityIcon></VisibilityIcon> }
                    onClick={() =>  {
                         setVisibleOrderID(params.id as string);
                         setVisible(true)
                    }
                       
                    }
                />
            ] : [
                <GridActionsCellItem label="show order" icon={<VisibilityIcon></VisibilityIcon> }
                onClick={() =>  {
                     setVisibleOrderID(params.id as string);
                     setVisible(true)
                }
                   
                }
            />
            ]
        }
    ]
    async function updateDateDelivery(newRow: any): Promise<any> {
        const rowData: OrderType = newRow;
        const month = ((rowData.deliveryDate as Date).getMonth()  + 1) < 10 ? ('0'+ ((rowData.deliveryDate as Date).getMonth()  + 1) + '') : ((rowData.deliveryDate as Date).getMonth()  + 1) + '';
        rowData.deliveryDate = (rowData.deliveryDate as Date).getFullYear() + '-' + month + '-' + (rowData.deliveryDate as Date).getDate();
        const today = new Date().toISOString().substring(0,10);
        console.log("new " + rowData.deliveryDate);
        console.log(today);
        
        if (today.localeCompare(rowData.deliveryDate) < 0 || rowData.deliveryDate.localeCompare(rowData.orderDate) < 0)  {
            throw 'new date delivered must be beetween order date and today'
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
        {visibleOrderID && <Modal 
        open={visible}
        onClose={handleClose}
        >
         <OrderContent orderId={visibleOrderID}/>
        </Modal>}
    </Box>
}