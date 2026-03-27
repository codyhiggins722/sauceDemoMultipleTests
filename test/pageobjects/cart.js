import Site from "./site.main";
import HomePage from "./homepage"

class CartPage extends Site {
    get continueShopping() {
        return $('#continue-shopping')
    }
    get checkOutBtn() {
        return $('#checkout')
    }
    get checkoutRemove() {
        return $('//button[contains(text(), "Remove")]')
    }
    get cancelBtn() {
        return $('#cancel')
    }
    async cartNavigation() {
        await HomePage.cartButton.click();
        await expect(this.checkOutBtn).toBeExisting();
        await this.checkOutBtn.click();
        await expect (this.cancelBtn).toBeExisting();
        await this.cancelBtn.click();
        await expect (this.continueShopping).toBeExisting();
        await this.continueShopping.click();
        await expect (HomePage.landingPage).toBeExisting();
    }
    async removeItemsProcess() {
        await HomePage.cartButton.click();
        await expect(this.checkOutBtn).toBeExisting();
        await this.checkOutBtn.click();
        await expect (this.cancelBtn).toBeExisting();
        await this.cancelBtn.click();
        await expect (this.continueShopping).toBeExisting();
        await this.continueShopping.click();
        await expect (HomePage.landingPage).toBeExisting();
        await HomePage.cartButton.click();
        await expect (HomePage.itemInCart).toBeExisting();
        await this.checkoutRemove.click();
        await expect (HomePage.itemInCart).not.toBeExisting();
        await this.continueShopping.click();
        await expect (HomePage.landingPage).toBeExisting();
    }
}
export default new CartPage();