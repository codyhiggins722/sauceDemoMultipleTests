import Site from "./site.main";

class ItemDetail extends Site {
    get backToProducts(){
        return $('#back-to-products')
    }
}
export default new ItemDetail();