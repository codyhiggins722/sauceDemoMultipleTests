import Site from "./site.main";

class CartPage extends Site {
    get continueShopping() {
        return $('#continue-shopping')
    }
}
export default new CartPage();