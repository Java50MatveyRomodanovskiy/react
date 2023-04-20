import { productsService } from "./config/products-service-config"
import productsConfig from "./config/products-config.json"
import { ProductType } from "./model/ProductType";
import { getRandomNumber } from "./util/random";
test("setProducts test", () => {
    productsService.setProducts().then(count => {
        expect(count).toEqual(productsConfig.length);
    })
})
test ("random category exists", () => {
    const categories: string[] = productsConfig.map(pc =>  pc.name.split("-")[0]);
    const randomNum = getRandomNumber(0, productsConfig.length-1)
    productsService.isCategoryExist(categories[randomNum])
    .then(res => expect(res).toBeTruthy());
})
test ("category kukureku doesn't exist", () => {
    productsService.isCategoryExist("kukureku")
    .then(res => expect(res).toBeFalsy());
})
test ("all categories exists", () => {
    const categories: string[] = productsConfig.map(pc =>  pc.name.split("-")[0]);
    const promises = categories.map(m => productsService.isCategoryExist(m));
    Promise.all(promises).then(results => {
        const res = results.every(res => res==true);
        expect(res).toBeTruthy();
    })
})
test("remove category",() => {
    const categories: string[] = productsConfig.map(pc =>  pc.name.split("-")[0]);
    const randomNum = getRandomNumber(0, productsConfig.length-1)
    productsService.removeCategory(categories[randomNum]);
    productsService.isCategoryExist(categories[randomNum]).then(
        res => expect(res).toBeTruthy())
    });
