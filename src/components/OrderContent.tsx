import { Avatar, Box } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useSelector } from "react-redux";
import { OrderType } from "../model/OrderType";
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: '70vw', 
    height: '40vh'
  };
export const OrderContent: React.FC<{orderId: string}> = ({orderId})=> {
    const orders = useSelector<any, OrderType[]>(state => state.ordersState.orders);
    const orderColumns: GridColDef[] = [
        {
            field: "image", headerName: '', flex: 0.3, editable: true,
            renderCell: (params) => <Avatar
                src={params.value.startsWith("http") || params.value.length > 40 ? params.value : `${params.value}`}
                sx={{ width: "90%", height: "80px" }} />, align: "center", headerAlign: "center",
        },
        { field: "title", headerName: 'Title', flex: 0.8 },
        { field: "category", headerName: "Category", flex: 0.5 },
        { field: "unit", headerName: "Unit", flex: 0.4 },
        { field: "cost", headerName: "Cost (ILS)", flex: 0.3, editable: true, type: 'number' },
    ]
    return<Box sx={style}>
<DataGrid columns={orderColumns} rows={orders.find(o => o.id == orderId)!.shopping} getRowHeight={() => 'auto'}/>  
    </Box>
}