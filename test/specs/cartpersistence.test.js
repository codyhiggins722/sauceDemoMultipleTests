import SauceLog from '../pageobjects/site.access.js'
import HomePage from '../pageobjects/homepage.js'
import CartPage from '../pageobjects/cart.js'
import HamburgerMenu from '../pageobjects/sidebar.js'

describe('SauceLabs Cart Persistence', () => {
    it('should log in successfully and show the Products page', async () => {
        await SauceLog.open()
        await SauceLog.login('standard_user', 'secret_sauce')
        await expect(HomePage.landingPage).toBeExisting();
    });
    it('should add items into the cart, then refresh, and verify those items are still there', async () => {
        await HomePage.clickRandomAtC();
        await HomePage.homePagePersistence();
    });
    it('should open the cart page with items in the cart, refresh the browser, then verify those items are still there', async() => {
        await CartPage.cartpagePersistence();
    });
    it('should return to inventory page and add ALL items to cart, refresh there and then refresh in cart to verify all items remain', async () => {
        await HamburgerMenu.returntoInventory();
        await HomePage.addALLitems();
        await expect (HomePage.allItemsAdded).toBeExisting();
        await HomePage.cartBadgeNumber();
        await browser.refresh();
        await HomePage.badgeCompare();
        await HomePage.cartButton.click();
        await expect(await CartPage.getRemoveButtonCount()).toBe(6);
        await CartPage.getRemoveButtonCount();
        await browser.refresh();
        await CartPage.removeButtonCompare();
    });
})