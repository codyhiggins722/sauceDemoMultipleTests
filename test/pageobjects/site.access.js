import { $ } from '@wdio/globals'
import Site from './site.main.js'
import HamburgerMenu from './sidebar.js'

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
    }
    async logout(){
        await HamburgerMenu.hamburgerBtn.click();
        await this.logoutBtn.waitForClickable({ timeout: 3000 });
        await this.logoutBtn.click();
    }
}

export default new SauceLog();
