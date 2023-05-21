

import Page from "./page.js";

class CheckoutStepTwoPage extends Page {

    get cartItemName(){
        return $('div[class="inventory_item_name"]')
    }
    get cartItemDescription(){
        return $('div[class="inventory_item_desc"]')
    }
    get cartItemPrice(){
        return $('div[class="inventory_item_price"]')
    }
    get summaryInformation(){
        return $('div[class="summary_info"]')
    }
    get cancelButton(){
        return $('button[data-test="cancel"]')
    }
    get finishButton(){
        return $('button[data-test="finish"]')
    }
    async cancel(){
        await this.cancelButton.click();
    }
    async finish(){
        await this.finishButton.click();
    }

    open (){
        return super.open("/checkout-step-two.html");
    }
}

export default new CheckoutStepTwoPage;