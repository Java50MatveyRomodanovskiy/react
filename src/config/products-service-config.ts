import ProductsService from "../service/ProductService";
import { ProductsServiceFirebase } from "../service/ProductsServiceFirebase";
export const productsService: ProductsService = new ProductsServiceFirebase();