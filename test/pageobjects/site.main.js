import { browser } from '@wdio/globals'

export default class Site {
    get currentURL() {
        return browser.getUrl();
    }
    open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
