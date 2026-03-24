import { expect } from '@wdio/globals'
import SauceLog from '../pageobjects/site.access.js'
import HomePage from '../pageobjects/homepage.js'

describe('SauceLabs Main Page Hamburger Menu', () => {
    it('should have all options in the sidebar menu interactable while on the main page', async () => {
        await SauceLog.open()
        await SauceLog.login('standard_user', 'secret_sauce')
        await expect(HomePage.landingPage).toBeExisting();
        await HomePage.clickRandom();
        await expect(HomePage.itemInCart).toBeExisting();
    })
})