import InventoryPage from "../pageobjects/inventory.page.js";

describe("The Inventory Page", () => {
    beforeEach(async () => {
        await InventoryPage.open();
    })
    it("should render the correct header title", async () => {
        expect(await InventoryPage.headerTitle.getText()).toEqual("Products")
    })
    it("should show the cart page when the icon is clicked", async () => {
        await InventoryPage.viewShoppingCart();
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/cart.html")
    })

})