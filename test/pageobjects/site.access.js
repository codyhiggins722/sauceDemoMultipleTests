import { $ } from '@wdio/globals'
import Site from './site.main.js'
import HamburgerMenu from './sidebar.js'
import HomePage from './homepage.js'

class SauceLog extends Site {
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
     get btnSubmit () {
        return $('#login-button');
    }
    get logoutBtn(){
        return $('#logout_sidebar_link')
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        await expect(HomePage.landingPage).toBeExisting();
    }
    async logout(){
        await HamburgerMenu.hamburgerBtn.click();
        await this.logoutBtn.waitForClickable({ timeout: 3000 });
        await this.logoutBtn.click();
        await expect (this.inputUsername).toBeExisting();
    }
}

export default new SauceLog();
