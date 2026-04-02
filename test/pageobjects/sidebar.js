import { expect } from '@wdio/globals'
import Site from '../pageobjects/site.main'
import HomePage from '../pageobjects/homepage'
import CartPage from './cart'
import itemDetail from './item.detail'
import SauceLog from './site.access'

class HamburgerMenu extends Site{
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
    async returntoInventory(){
        await this.hamburgerBtn.click();
        await this.allItems.click();
        await expect(HomePage.landingPage).toBeExisting();
    }
    async menuNavigationAbout(){
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
    await browser.setTimeout({ 'pageload' : 5000});
    try {
        await this.about.click();
    } catch (err) {
    }
    await browser.url('https://www.saucedemo.com/inventory.html');
    await browser.setTimeout({ 'pageload': 30000});
    const productTitle = await $('//span[contains(text(), "Products")]');
    await productTitle.waitForDisplayed({ timeout: 10000 });
    await this.hamburgerBtn.click();
    await this.closeButton.click();
    }
    async menuNavigationAboutReload(){
    await this.hamburgerBtn.click();
    await this.allItems.waitForClickable({ timeout: 3000 });
    let originalUrl = await browser.getUrl();
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
    originalUrl = await browser.getUrl();
    await browser.setTimeout({ 'pageload' : 5000});
    try {
        await this.about.click();
    } catch (err) {
    }
    await browser.reloadSession();
    await SauceLog.open();
    await SauceLog.login('standard_user', 'secret_sauce');
    const productTitle = await $('//span[contains(text(), "Products")]');
    await productTitle.waitForDisplayed({ timeout: 10000 });
        if ((await this.currentURL !== originalUrl) && originalUrl.includes('cart.html')) {
            await expect (HomePage.landingPage).toBeExisting();
            await HomePage.cartButton.click();
            await expect (CartPage.continueShopping).toBeExisting();
        }
        else if ((await this.currentURL !== originalUrl) && originalUrl.includes('inventory-item.html')) {
            await expect (HomePage.landingPage).toBeExisting();
            await HomePage.clickRandomItemImg();
            await expect (itemDetail.backToProducts).toBeExisting();
        }    
    await this.hamburgerBtn.click();
    await this.closeButton.click();
    }
}

export default new HamburgerMenu();