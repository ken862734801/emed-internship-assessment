

import Page from "./page.js";

class CheckoutStepTwoPage extends Page {

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