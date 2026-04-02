import SauceLog from '../pageobjects/site.access.js'
import HomePage from '../pageobjects/homepage.js'
import CartPage from '../pageobjects/cart.js'
import HamburgerMenu from '../pageobjects/sidebar.js'

describe('SauceLabs Cart Persistence', () => {
    it('log in successfully and show the Products page', async () => {
        await SauceLog.open()
        await SauceLog.login('standard_user', 'secret_sauce')
    });
    it('add items into the cart, then refresh, and verify those items are still there', async () => {
        await HomePage.clickRandomAtC();
        await HomePage.homePagePersistence();
    });
    it('open the cart page with items in the cart, refresh the browser, then verify those items are still there', async() => {
        await CartPage.cartpagePersistence();
    });
    it('return to inventory page and add ALL items to cart, refresh there and then refresh in cart to verify all items remain', async () => {
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
    it('return to inventory, log out, then log back in, and items in the cart should still be there as it was prior to logging out', async() => {
        await HamburgerMenu.returntoInventory();
        await HomePage.cartBadgeNumber();
        await SauceLog.logout();
        await SauceLog.login('standard_user', 'secret_sauce');
        await HomePage.badgeCompare();
    });
    it('remove all items from the cart on inventory page, refresh, ensure items are still removed', async() => {
        await HomePage.removeALLHomeitems();
        await expect (HomePage.itemInCart).not.toBeExisting();
        await browser.refresh();
        await expect (HomePage.itemInCart).not.toBeExisting();
    });
    it('add items to cart, enter cart, remove items, refresh browser and ensure items are still removed', async() => {
        await HomePage.clickRandomAtC();
        await CartPage.removeALLCheckoutitems();
        await expect (HomePage.itemInCart).not.toBeExisting();
        await browser.refresh();
        await expect (HomePage.itemInCart).not.toBeExisting();
    });
})