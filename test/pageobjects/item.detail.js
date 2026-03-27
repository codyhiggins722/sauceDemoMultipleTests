import Site from "./site.main";
import HomePage from './homepage'

class ItemDetail extends Site {
    get backToProducts(){
        return $('#back-to-products')
    }
    get itemDetailAtC(){
        return $('#add-to-cart')
    }
    async itemDetailAtCProcess(){
        await this.itemDetailAtC.click();
        await expect (HomePage.itemInCart).toBeExisting();
    }
}
export default new ItemDetail();