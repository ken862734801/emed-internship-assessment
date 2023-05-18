import CheckoutStepTwoPage from "../pageobjects/checkout.step.two.page.js";

describe("The Checkout Step Two Page", () => {

    beforeEach(async () => {
        await CheckoutStepTwoPage.open();
    })
    it("should render the correct header title", async () => {
        expect(await CheckoutStepTwoPage.headerTitle.getText()).toEqual("Checkout: Overview")
    })

    it("should return to the inventory page when the cancel button is clicked", async () => {
        await CheckoutStepTwoPage.cancel();
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/inventory.html")
    })

    it("should move to the checkout complete page when the finish button is clicked", async () => {
        await CheckoutStepTwoPage.finish();
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/checkout-complete.html")

    })
})