import { expect } from '@wdio/globals'
import Site from '../pageobjects/site.main'
import HomePage from '../pageobjects/homepage'
import CartPage from './cart'
import itemDetail from './item.detail'

class HamburgerMenu extends Site{
//-------selectors-----------
    get hamburgerBtn(){
            return $('.bm-burger-button')
        }
    get allItems(){
        return $('#inventory_sidebar_link')
    }
    get about(){
        return $('#about_sidebar_link')
    }
    get resetState(){
        return $('#reset_sidebar_link')
    }
    get closeButton(){
        return $('#react-burger-cross-btn')
    }
    get infoPage(){
        return $('[href="/request-demo"]')
    }
    async menuNavigation(){
    await this.hamburgerBtn.click();
    await this.allItems.waitForClickable({ timeout: 3000 });
    const originalUrl = await browser.getUrl();
    await this.allItems.click();
        if ((await this.currentURL !== originalUrl) && originalUrl.includes('cart.html')) {
            await expect (HomePage.landingPage).toBeExisting();
            await HomePage.cartButton.click();
            await expect (CartPage.continueShopping).toBeExisting();
            await this.hamburgerBtn.click();
        }
        else if ((await this.currentURL !== originalUrl) && originalUrl.includes('inventory-item.html')) {
            await expect (HomePage.landingPage).toBeExisting();
            await HomePage.clickRandomItemImg();
            await expect (itemDetail.backToProducts).toBeExisting();
            await this.hamburgerBtn.click();
        }
    await this.resetState.click();
    await expect (HomePage.itemInCart).not.toBeExisting();
    const aboutUrl = await this.about.getAttribute('href');
    await expect(aboutUrl).toContain('saucelabs.com');
    await this.closeButton.click();
    }
}

export default new HamburgerMenu();