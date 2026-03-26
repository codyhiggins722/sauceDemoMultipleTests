import { browser, expect } from '@wdio/globals'
import Site from '../pageobjects/site.main'
import HomePage from '../pageobjects/homepage'
//hamburger menu items
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
    await this.allItems.click();
    await this.resetState.click();
    await expect (HomePage.itemInCart).not.toBeExisting();
    const aboutUrl = await this.about.getAttribute('href');
    await expect(aboutUrl).toContain('saucelabs.com');
    await this.closeButton.click();
    }
}

export default new HamburgerMenu();