import SauceLog from '../pageobjects/site.access.js'
import HomePage from '../pageobjects/homepage.js'
import CartPage from '../pageobjects/cart.js'
import ItemDetail from '../pageobjects/item.detail.js'

describe('SauceLabs Main Page Hamburger Menu', () => {
    it('should log in successfully and show the Products page', async () => {
        await SauceLog.open()
        await SauceLog.login('standard_user', 'secret_sauce')
        await expect(HomePage.landingPage).toBeExisting();
    });
    it('should navigate into the cart page and access functions within that page', async () => {
        await CartPage.cartNavigation();
    });
    it('should add an item to the cart then navigate into the cart and perform funtions', async() => {
        await HomePage.clickRandomAtC();
        await expect (HomePage.itemInCart).toBeExisting();
        await CartPage.cartNavigation();
        await CartPage.removeItemsProcess();
    });
    it('should navigate to an items details page, then into the cart page and perform fucntions', async() => {
        await HomePage.clickRandomItemImg();
        await expect (ItemDetail.itemDetailAtC).toBeExisting();
        await CartPage.cartNavigation();
    });
    it('should navigate to an items details page, add an item, then into the cart page and perform functions', async () => {
        await HomePage.clickRandomItemImg();
        await expect (ItemDetail.itemDetailAtC).toBeExisting();
        await ItemDetail.itemDetailAtCProcess();
        await CartPage.removeItemsProcess();
    });
})