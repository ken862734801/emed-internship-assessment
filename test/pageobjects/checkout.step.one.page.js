import Page from "./page.js";

class CheckoutStepOnePage extends Page {

    get inputFirstName(){
        return $('input[data-test="firstName"]')
    }
    get inputLastName(){
        return $('input[data-test="lastName"]')
    }
    get inputPostalCode(){
        return $('input[data-test="postalCode"]')
    }
    get errorMessage(){
        return $('h3[data-test="error"]')
    }
    get continueButton(){
        return $('input[data-test="continue"]')
    }
    get cancelButton(){
        return $('button[data-test="cancel"]')
    }

    async submit (firstName, lastName, postalCode){
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputPostalCode.setValue(postalCode);
        await this.continueButton.click();
    }
    async cancel(){
        await this.cancelButton.click();
    }
    open(){
        return super.open("/checkout-step-one.html")
    }
}

export default new CheckoutStepOnePage