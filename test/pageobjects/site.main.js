import { browser } from '@wdio/globals'

//base page
export default class Site {
    open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
