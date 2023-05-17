import CheckoutStepOnePage from "../pageobjects/checkout.step.one.page.js";

describe("The Checkout Step One Page", () => {

    it("should move to the next page when all fields are completed", async () => {
        await CheckoutStepOnePage.open()
        await CheckoutStepOnePage.submit("Bob", "Williams", 12345)
    
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/checkout-step-two.html")
    })
    
})