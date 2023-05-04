import { Delete } from "@mui/icons-material"
import { Alert, Avatar, Box, Snackbar } from "@mui/material"
import {DataGrid, GridActionsCellItem, GridColDef} from "@mui/x-data-grid"
import { useState, useRef } from "react"
import { useSelector } from "react-redux"
import { ordersService } from "../../config/order-service-config"
import { productsService } from "../../config/products-service-config"
import { ProductType } from "../../model/ProductType"
export const ProductsAdmin: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const alertMessage = useRef<string>('');
    const products: ProductType[] =
     useSelector<any, ProductType[]>(state => state.productsState.products);
    const columns: GridColDef[] = [
        {field:"image", headerName: 'Image', flex: 1, sortable: false,
         renderCell: (params) => <Avatar src={`images/${params.value}`} 
         sx={{width: "30%", height: "80px"}}/>, align: "center", headerAlign: "center"},
        {field: "title", headerName: 'Title', flex: 0.8},
        {field: "category", headerName: "Category", flex: 0.5},
        {field: "unit", headerName: "Unit", flex: 0.4},
        {field: "cost", headerName: "Cost (ILS)", flex: 0.3, editable: true, type: 'number'},
        {field: 'actions', type: 'actions', flex: 0.1, getActions: (params) => [
            <GridActionsCellItem label="remove" icon={<Delete></Delete>}
             onClick={async () => await 
                productsService.removeProduct(params.id as string)}/>
        ]}
    ]
    async function updatePrice(newRow: any, oldRow: any): Promise<any> {
        const rowData: ProductType = newRow;
        if (rowData.cost > 1.5 * oldRow.cost) {
            throw 'count must be less than 50% expensive'
        }
        await productsService.editProduct(rowData)
        return newRow;
    }
    return <Box sx={{width: "80vw",height: "80vh"}}>
        <DataGrid columns={columns} rows={products} getRowHeight={() => 'auto'}
         processRowUpdate={updatePrice}
         onProcessRowUpdateError={(error) => {
            alertMessage.current = error;
            setOpen(true)
         }}/>
         <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert severity="error" sx={{ width: '30vw', fontSize: '1.5em' }}>
                {alertMessage.current}
            </Alert>
        </Snackbar>

    </Box>
}