import SauceLog from '../pageobjects/site.access.js'
import HomePage from '../pageobjects/homepage.js'
import ItemDetail from '../pageobjects/item.detail.js'
import HamburgerMenu from '../pageobjects/sidebar.js'

describe('SauceLabs Item Detail Hamburger Menu', () => {
    it('should log in successfully and show the Products page', async () => {
        await SauceLog.open()
        await SauceLog.login('standard_user', 'secret_sauce')
        await expect(HomePage.landingPage).toBeExisting();
    });
    it('should add an item to the cart then navigate to any item page', async () => {
        await HomePage.clickRandomAtC();
        await expect(HomePage.itemInCart).toBeExisting();
        await HomePage.clickRandomItemImg();
        await expect(ItemDetail.backToProducts).toBeExisting();
    });
    it('all items returns you to products page, reset state removes item from cart, correct URL is associated to About, and that "X" closes menu', async () => {    
    await HamburgerMenu.menuNavigation();
    });
    it('should log out and return to sign in page', async () => {   
    await SauceLog.logout();
    await expect (SauceLog.inputUsername).toBeExisting();
    });
})