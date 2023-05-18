import CheckoutStepOnePage from "../pageobjects/checkout.step.one.page.js";

describe("The Checkout Step One Page", () => {

    beforeEach(async () => {
        await CheckoutStepOnePage.open();
    })

    it("should render the correct header title", async () => {
        expect(await CheckoutStepOnePage.headerTitle.getText()).toEqual("Checkout: Your Information")
    })

    it("should move to the checkout step two page when all fields are completed", async () => {
        await CheckoutStepOnePage.submit("Bob", "Williams", 12345)
    
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/checkout-step-two.html")
    })

    it("should display the error message when an input is missing", async() => {
        await CheckoutStepOnePage.submit("Bob", "Williams", "")

        const errorMessageIsDisplayed = await CheckoutStepOnePage.errorMessage.isDisplayed();
        expect(errorMessageIsDisplayed).toEqual(true);
    })

    it("should return back to the cart page when cancel button is clicked", async () => {
        await CheckoutStepOnePage.cancel();
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/cart.html")
    })
    
})