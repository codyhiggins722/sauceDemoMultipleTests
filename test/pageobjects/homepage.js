import { $ } from '@wdio/globals'
import { $$ } from '@wdio/globals'
import Site from './site.main'

// items relating to the main landing page
class HomePage extends Site{
    get landingPage(){
        return $('//span[contains(text(),"Products")]')
    }
    get addToCart(){
        return $$('//button[contains(text(), "Add to cart")]')
    }
    get itemInCart(){
        return $('.shopping_cart_badge')
    }
    async clickRandom(){
        const buttons = await this.addToCart;
        const randomIndex = Math.floor(Math.random() * buttons.length);
        await buttons[randomIndex].click();
    }
}

export default new HomePage();
