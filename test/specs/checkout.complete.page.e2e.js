import CheckoutCompletePage from "../pageobjects/checkout.complete.page.js"; 

describe("The Checkout Complete Page", () => {

    it("should render the correct header title", async () => {
        expect(await CheckoutCompletePage.headerTitle.getText()).toEqual("Checkout: Complete!");
    })
    it("should render the green checkmark image", async () => {
        await CheckoutCompletePage.open();

        const isCheckoutImageRendered = await CheckoutCompletePage.checkoutImage.isDisplayed();
        expect(isCheckoutImageRendered).toEqual(true)
    })

    it("should display the correct thank you message", async () => {
        await CheckoutCompletePage.open();
      
        expect(await CheckoutCompletePage.completeHeader.getText()).toEqual("Thank you for your order!")
        expect(await CheckoutCompletePage.completeText.getText()).toEqual("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    })

    it("should return the user back home", async() => {
        await CheckoutCompletePage.open();
        await CheckoutCompletePage.returnHome();

        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/inventory.html")

    })
})