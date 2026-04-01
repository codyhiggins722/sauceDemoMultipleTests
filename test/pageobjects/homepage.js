import { $$ } from '@wdio/globals'
import Site from './site.main'

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
    get allItemsAdded(){
        return $('//span[contains(text(),"6")]')
    }
    get homePageRemoveBtn(){
        return $$('//button[contains(text(),"Remove")]')
    }
    async cartBadgeNumber(){
        const badge = await $('.shopping_cart_badge');
        return await badge.getText();
    }
    async badgeCompare(){
        const cartRefreshBadge = await $('.shopping_cart_badge').getText();
        const ogBadgeNumber = await this.cartBadgeNumber();
        await expect(cartRefreshBadge).toEqual(ogBadgeNumber);
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
    async addALLitems(){
        const atcButtons = await this.addToCart;
        for (const atcButton of atcButtons){
            await atcButton.click();
        }
    }
    async homePagePersistence(){
        await expect (this.itemInCart).toBeExisting();
        await this.cartBadgeNumber();
        await browser.refresh();
        await this.badgeCompare();
    }
    async removeALLHomeitems(){
        const removeButtons = await this.homePageRemoveBtn;
        for (const removeButton of removeButtons){
            await removeButton.click();
        }
    }
}

export default new HomePage();
