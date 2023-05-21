import CheckoutStepTwoPage from "../pageobjects/checkout.step.two.page.js";

describe("The Checkout Step Two Page", () => {

    beforeEach(async () => {
        await CheckoutStepTwoPage.open();
    })
    it("should render the correct header title", async () => {
        expect(await CheckoutStepTwoPage.headerTitle.getText()).toEqual("Checkout: Overview")
    })
    it("should return the correct text for the cart item fields", async () => {
        await expect(CheckoutStepTwoPage.cartItemName).toHaveText("Sauce Labs Backpack");
        await expect(CheckoutStepTwoPage.cartItemDescription).toHaveText("carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.");
        await expect(CheckoutStepTwoPage.cartItemPrice).toHaveText("$29.99");
    })
    it("should display the summary information div", async() => {
        const isSummaryInformation = await CheckoutStepTwoPage.summaryInformation.isDisplayed();
        expect(await isSummaryInformation).toEqual(true);
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