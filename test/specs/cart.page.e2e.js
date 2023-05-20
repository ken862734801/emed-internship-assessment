import CartPage from "../pageobjects/cart.page.js";
import InventoryPage from "../pageobjects/inventory.page.js";

describe("The Cart Page", () => {
    it("should return the correct header title", async () => {
        expect(await CartPage.headerTitle.getText()).toEqual("Your Cart")
    })
    it("should display the cart item", async () => {
        await InventoryPage.open();
        await InventoryPage.addSauceLabsBackpackBtn.click();
        await expect(InventoryPage.shoppingCartLink).toHaveText("1");
        await InventoryPage.viewShoppingCart();

        const isCartItemDisplayed = await CartPage.cartItem.isDisplayed();
        expect(await isCartItemDisplayed).toEqual(true);

    })

    it("should return back to the inventory page when continue shopping is clicked", async () => {
        await CartPage.open()
        await CartPage.continue();
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/inventory.html")
    })
    it("should move to the checkout step one page when checkout is clicked", async () => {
        await CartPage.open()
        await CartPage.checkout();
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/checkout-step-one.html");
    })
})
