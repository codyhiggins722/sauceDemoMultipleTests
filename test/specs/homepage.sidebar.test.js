import SauceLog from '../pageobjects/site.access.js'
import HomePage from '../pageobjects/homepage.js'
import HamburgerMenu from '../pageobjects/sidebar.js'

describe('SauceLabs Main Page Hamburger Menu', () => {
    it('should log in successfully and show the Products page', async () => {
        await SauceLog.open()
        await SauceLog.login('standard_user', 'secret_sauce')
        await expect(HomePage.landingPage).toBeExisting();
    });
    it('should add an item to the cart', async () => {
        await HomePage.clickRandomAtC();
        await expect(HomePage.itemInCart).toBeExisting();
    });
    it('all items does nothing, reset state removes item from cart, correct URL is associated to About, and that "X" closes menu', async () => {    
    await HamburgerMenu.menuNavigationAboutTest();
    });
    it('should log out and return to sign in page', async () => {   
    await SauceLog.logout();
    await expect (SauceLog.inputUsername).toBeExisting();
    });
})