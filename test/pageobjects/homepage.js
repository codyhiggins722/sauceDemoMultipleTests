import { $$ } from '@wdio/globals'
import Site from './site.main'

// items relating to the main landing page
class HomePage extends Site{
    get landingPage(){
        return $('//span[contains(text(),"Products")]')
    }
    get addToCart(){
        return $$('//button[contains(text(), "Add to cart")]')
    }
    get itemInCart(){
        return $('.shopping_cart_badge')
    }
    get cartButton(){
        return $('.shopping_cart_link')
    }
    get itemImage(){
        return $$('div[class="inventory_item_img"]')
    }
    async clickRandomAtC(){
        const buttons = await this.addToCart;
        const randomAtCIndex = Math.floor(Math.random() * buttons.length);
        await buttons[randomAtCIndex].click();
    }
    async clickRandomItemImg(){
        const pictures = await this.itemImage;
        const randomIndexItemImg = Math.floor(Math.random() * pictures.length);
        await pictures[randomIndexItemImg].click();
    }
}

export default new HomePage();
