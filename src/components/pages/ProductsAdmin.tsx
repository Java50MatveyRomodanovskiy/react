import { Delete, Add } from "@mui/icons-material"
import { Alert, Avatar, Box, Button, Snackbar } from "@mui/material"
import { DataGrid, GridActionsCellItem, GridColDef } from "@mui/x-data-grid"
import { useState, useRef } from "react"
import { useSelector } from "react-redux"
import { productsService } from "../../config/products-service-config"
import { ProductType } from "../../model/ProductType"
import { ProductForm } from "../forms/ProductForm"
export const ProductsAdmin: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [flADD, setFLADD] = useState<boolean>(false);
    const alertMessage = useRef<string>('');
    const products: ProductType[] =
        useSelector<any, ProductType[]>(state => state.productsState.products);
    const columns: GridColDef[] = [
        {
        field:"image", headerName: '', flex: 0.3, editable: true,
         renderCell: (params) => <Avatar 
         src={params.value.startsWith("http") || params.value.length > 40? params.value : `images/${params.value}`} 
         sx={{width: "90%", height: "80px"}}/>, align: "center", headerAlign: "center",
        },
        { field: "title", headerName: 'Title', flex: 0.8 },
        { field: "category", headerName: "Category", flex: 0.5 },
        { field: "unit", headerName: "Unit", flex: 0.4 },
        { field: "cost", headerName: "Cost (ILS)", flex: 0.3, editable: true, type: 'number' },
        {
            field: 'actions', type: 'actions', flex: 0.1, getActions: (params) => [
                <GridActionsCellItem label="remove" icon={<Delete></Delete>}
                    onClick={async () => await
                        productsService.removeProduct(params.id as string)} />
            ]
        }
    ]
    async function updatePrice(newRow: any, oldRow: any): Promise<any> {
        const rowData: ProductType = newRow;
        if (rowData.cost > 1.5 * oldRow.cost) {
            throw 'new price must be less than 50% expensive'
        }
        await productsService.editProduct(rowData)
        return newRow;
    }
    function submitAddProduct(product: ProductType): string {
        let errorMessage = '';
        const isProdNotExists = (products.find(p => p.title === product.title && product.category === p.category && product.unit === p.unit));
        if (!isProdNotExists){
            productsService.addProduct(product);
        setFLADD(false);
        }
        else {
            errorMessage = 'This product already exists in database'
        }
        return errorMessage;
    }
    return !flADD ? <Box sx={{width: "100vw",display: "flex",
    flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
       <Box sx={{width: "80vw",height: "60vh"}}>
        <DataGrid columns={columns} rows={products} getRowHeight={() => 'auto'}
            processRowUpdate={updatePrice}
            onProcessRowUpdateError={(error) => {
                alertMessage.current = error;
                setOpen(true)
            }} />
        </Box>
        <Button onClick={() => setFLADD(true)}>
            <Add></Add>
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
            <Alert severity="error" sx={{ width: '30vw', fontSize: '1.5em' }}>
                {alertMessage.current}
            </Alert>
        </Snackbar>
    </Box> : <ProductForm submitFn={submitAddProduct}></ProductForm>
}