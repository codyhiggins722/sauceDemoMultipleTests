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
    async getRemoveButtonCount(){
        const removeButtons = await $$('//button[contains(text(), "Remove")]')
        return removeButtons.length;
    }
    async removeButtonCompare(){
        const newRemoveButtonCount = await $$('//button[contains(text(), "Remove")]')
        const ogRemoveButtonCount = await this.getRemoveButtonCount();
        await expect(newRemoveButtonCount.length).toEqual(ogRemoveButtonCount);
    }
    async cartNavigation(){
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
    async cartpagePersistence() {
        await HomePage.cartButton.click();
        await expect (this.checkOutBtn).toBeExisting();
        await this.getRemoveButtonCount();
        await browser.refresh();
        await this.removeButtonCompare();
    }
}
export default new CartPage();