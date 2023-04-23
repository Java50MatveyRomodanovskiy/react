import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"
import CardMedia from '@mui/material/CardMedia';
import { useSelector } from "react-redux"
import { ProductType } from "../../model/ProductType"
export const ProductsClient: React.FC = () => {
    const products: ProductType[] =
    useSelector<any, ProductType[]>(state => state.productsState.products);
    return (
<Grid container spacing={1}>
{products.map(product =>
<Grid item xs={3}>
 <Card sx={{ maxWidth: 345}}>
 <CardMedia
   component="img"
   alt= {product.title}
   height="140"
   image={`images/${product.image}`}
 />
 <CardContent sx={{paddingBottom:'5px'}}>
   <Typography gutterBottom variant="h5" component="div">
     {product.title}
   </Typography>
   <Typography variant="body2"  color="text.secondary">
    Unit: {product.unit}
   </Typography>
   <Typography variant="body2" color="text.primary" sx={{fontSize:'1.3rem', marginTop:'2vh'}}>
    Price: {product.cost} ILS
   </Typography>
 </CardContent>
 <CardActions sx={{paddingTop:'0px'}}>
   <Button size="small" variant="outlined">+</Button>
   <Typography variant="body2" color="text.primary" sx={{fontSize:'1.3rem', marginLeft:'8px'}}>  0
   </Typography>
   <Button size="small" variant="outlined">-</Button>
 </CardActions>
</Card>
</Grid>
)}   
</Grid> 
  );
}