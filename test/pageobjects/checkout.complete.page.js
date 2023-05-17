
import Page from "./page.js";

class CheckoutCompletePage extends Page {

    get checkoutImage(){
        return $('img[class="pony_express"]')
    }
    get completeHeader(){
        return $('.complete-header')
    }
    get completeText(){
        return $('.complete-text')
    }
    get BackToProductsBtn(){
        return $('button[data-test="back-to-products"]')
    }

    async returnHome(){
        await this.BackToProductsBtn.click();
    }

    open(){
        return super.open("/checkout-complete.html")
    }
}

export default new CheckoutCompletePage