import CheckoutCompletePage from "../pageobjects/checkout.complete.page.js"; 

describe("Image Rendering", () => {
    it("should render the green checkmark image", async ()=> {
        await CheckoutCompletePage.open();

        const isCheckoutImageRendered = await CheckoutCompletePage.checkoutImage.isDisplayed();
        expect(isCheckoutImageRendered).toEqual(true)
    })
})
describe("Thank You Messages", () => {
    it("should display the correct thank you message", async () => {
        await CheckoutCompletePage.open();
      
        expect(await CheckoutCompletePage.completeHeader.getText()).toEqual("Thank you for your order!")
        expect(await CheckoutCompletePage.completeText.getText()).toEqual("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    })
})

describe("Back Home Button", () => {
    it("should return the user back home", async() => {
        await CheckoutCompletePage.open();
        await CheckoutCompletePage.returnHome();

        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/inventory.html")

    })
})