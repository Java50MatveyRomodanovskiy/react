import { Avatar, Box, Typography } from "@mui/material"
import {DataGrid, GridColDef, GridViewColumnIcon} from "@mui/x-data-grid"
import { useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import { productsService } from "../../config/products-service-config"
import { ProductType } from "../../model/ProductType"
import { ShoppingProductType } from "../../model/ShoppingProductType"
import { productsActions } from "../../redux/productsSlice"
export const ShoppingCart: React.FC = () => {
    type ShoppingCartType  = ProductType & {count:
        number, sum:number};
    const shopping = useSelector<any,ShoppingProductType[]>(state => state.shoppingState.shopping);

    const products: ProductType[] = useSelector<any, ProductType[]>(state => state.productsState.products);
    function getTableData(): ShoppingCartType[]{
        return shopping.map((p,index) => getColumn(p, index)).filter(p => p.id != "delete");
    }
    function getColumn(p: ShoppingProductType, i: number): ShoppingCartType {
        const curProd: ProductType | undefined  = products.find(pr => pr.id == p.id);
        let curItem: ShoppingCartType = {id: "delete", title: 'curProd!.title', category: "curProd!.category", unit: "curProd!.category", cost: 0, image: "curProd!.image", count: 0, sum: 0};
        if (curProd){
        curItem = {id: i +'', title: curProd!.title, category: curProd!.category, unit: curProd!.category, cost: curProd!.cost, image: curProd!.image, count: p.count, sum: Math.trunc((curProd!.cost * p.count)*100)/100}
        } 
    
        return curItem;
    }
    const tableData = useMemo(() => getTableData(), [products, shopping]);
    const columns: GridColDef[] = [
        {field:"image", headerName: 'Image', flex: 1,
        renderCell: (params) => <Avatar src={`images/${params.value}`} 
        sx={{width: "30%", height: "80px"}}/>, align: "center", headerAlign: "center"},
        {field: "title", headerName: 'Title', flex: 0.8},
        {field: "unit", headerName: "Unit", flex: 0.5},
        {field: "cost", headerName: "Price", flex: 0.4},
        {field: "count", headerName: "Count", flex: 0.3},
        {field: "sum", headerName: "Cost", flex: 0.3},
        ]
    const total: number = tableData.reduce((acc, curValue) => acc + curValue.cost, 0,);     
    return <Box sx={{width: "80vw",height: "80vh"}}>
        <DataGrid columns={columns} rows={tableData} getRowHeight={() => 'auto'}/>
        <Typography color="text.primary" sx={{ fontSize: "1.5em", textAlign: "right" }}>Total cost:
                        {total} <img src="images/israel-shekel-currency-symbol-svgrepo-com.svg" width="2%" />
                    </Typography>
    </Box>
}


function dispatch(arg0: any) {
    throw new Error("Function not implemented.")
}

