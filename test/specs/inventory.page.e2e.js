import InventoryPage from "../pageobjects/inventory.page.js";

describe("The Inventory Page", () => {
    beforeEach(async () => {
        await InventoryPage.open();
    })
    it("should render the correct header title", async () => {
        expect(await InventoryPage.headerTitle.getText()).toEqual("Products")
    })
    it("should render the correct amount of items", async () => {
        expect(await (InventoryPage.inventoryItems.length)).toEqual(6);
    })
    it("should add and remove an item when clicked", async () => {
        for(let i = 0; i < InventoryPage.inventoryButtons.length; i++){
            const button = InventoryPage.inventoryButtons[i];

            button.click();

            await expect(button).toHaveElementClassContaining('btn_secondary');
            await expect(button).toHaveText('Remove');
            await expect(InventoryPage.shoppingCartLink).toHaveText(1);


            button.click();

            await expect(button).toHaveElementClassContaining('btn_primary');
            await expect(button).toHaveText('Add to cart');
            await expect(InventoryPage.shoppingCartLink).toHaveText(0);

        }
    })
    it("should show the cart page when the icon is clicked", async () => {
        await InventoryPage.viewShoppingCart();
        expect(await browser.getUrl()).toEqual("https://www.saucedemo.com/cart.html")
    })

})