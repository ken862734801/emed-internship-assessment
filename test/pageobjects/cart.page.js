import Page from "./page.js";

class CartPage extends Page {
    get checkoutButton(){
        return $('button[data-test="checkout"]')
    }
    async checkout(){
        await this.checkoutButton.click();
    }
    open(){
        return super.open("/cart.html")
    }
}

export default new CartPage;