import Page from "./page.js";

class CartPage extends Page {
    get cartItem (){
        return $('div[class="cart_item"]')
    }
    get removeSauceLabsBackpackButton(){
        return $('button[data-test="remove-sauce-labs-backpack"]')
    }
    get continueShoppingButton(){
        return $('button[data-test="continue-shopping"]')
    }
    get checkoutButton(){
        return $('button[data-test="checkout"]')
    }
    async remove(){
        await this.removeSauceLabsBackpackButton.click();
    }
    async continue(){
        await this.continueShoppingButton.click();
    }
    async checkout(){
        await this.checkoutButton.click();
    }
    open(){
        return super.open("/cart.html")
    }
}

export default new CartPage();