import { Alert, Avatar, Box, Button, CardMedia, Grid, InputLabel, MenuItem, NativeSelect, Select, Snackbar, TextField } from "@mui/material";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { CategoryType } from "../../model/CategoryType";
import { ProductType } from "../../model/ProductType";
import productsParameters from "../../config/products-parameters-config.json"
type Props = {
    submitFn: (product: ProductType) => string
}
const initialProduct: ProductType = { category: '', image: '', cost: 0, title: ' ', unit: '' };
export const ProductForm: React.FC<Props> = ({ submitFn }) => {
    const [open, setOpen] = useState<boolean>(false);
    const alertMessage = useRef<string>('');
    const [product, setProduct] = useState<ProductType>(initialProduct);
    const categories = useSelector<any, CategoryType[]>(state => state.categoriesState.categories);
    const category = useRef<string>('');
    const image = useRef<string>('');
    const title = useRef<string>('');
    const unit = useRef<string>('');
    const cost = useRef<number>(0);
    function onSubmitFn(event: any) {
        event.preventDefault();
        product.title = product.title.trim()
        alertMessage.current = submitFn(product);
        if (!alertMessage.current) {
            document.querySelector('form')!.reset(); 
        }else{
            setOpen(true);
        }
    }
    function imageHandler(event: any) {
        const urlImage = event.target.value;
        image.current = urlImage;
        setProduct({ ...product, image: urlImage });
    }
    function titleHandler(event: any) {
        const titleNew = event.target.value;
        title.current = titleNew;
        setProduct({ ...product, title: titleNew});
    }
    function categoryHandler(event: any) {
        const categoryNew = event.target.value;
        category.current = categoryNew;
        setProduct({ ...product, category: categoryNew });
    }
    function unitHandler(event: any) {
        const unitNew = event.target.value;
        unit.current = unitNew;
        setProduct({ ...product, unit: unitNew });
    }
    function costHandler(event: any) {
        const costNew = event.target.value;
        cost.current = costNew;
        setProduct({ ...product, cost: costNew });
    }
    return <Box>
        <form onSubmit={onSubmitFn}>
            <Grid container spacing={4} justifyContent={'center'}>
                <Grid item xs={8} md={7}>
                    <TextField label='URL image' required fullWidth value={product.image}
                        onChange={imageHandler} />
                </Grid>
                <Grid item xs={5}>
                    {image.current && <CardMedia sx={{ height: '30vw' }} image={image.current} />}

                </Grid>
                <Grid item xs={4}>
                    <TextField label='Title' required fullWidth value={product.title}
                        onChange={titleHandler} />
                </Grid>
                <Grid item xs={4}>
                    <Select label="Category"
                        required fullWidth value={product.category}
                        onChange={categoryHandler}>
                        {categories.map(cat => <MenuItem value={cat.name}>{cat.name}</MenuItem>)}
                    </Select>
                </Grid>
                <Grid item xs={2}>
                    <Select label="Unit"
                        required fullWidth value={product.unit}
                        onChange={unitHandler}>
                        {productsParameters.units.map(un => <MenuItem value={un}>{un}</MenuItem>)}
                    </Select>
                </Grid>
                <Grid item xs={2}>
                    <TextField label="cost" fullWidth required type="number"
                        onChange={costHandler} value={product.cost}
                        helperText={`enter price in range [${productsParameters.minCost}-${productsParameters.maxCost}]`}
                        inputProps={{
                            min: `${productsParameters.minCost}`, max: `${productsParameters.maxCost}`
                        }} />
                </Grid>
                <Grid>
                <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
                    <Alert severity="error" sx={{ width: '30vw', fontSize: '1.5em' }}>
                        {alertMessage.current}
                    </Alert>
                </Snackbar>
                </Grid>
                <Grid item container spacing={5} justifyContent={'center'} xs={12}>
                    <Grid item xs={6}>
                        <Button type="submit">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button type="reset">Reset</Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    </Box>
}