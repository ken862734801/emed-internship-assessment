
import Page from "./page.js";

class InventoryPage extends Page {
    get inventoryItems (){
        return $$('div[class="inventory_item"]')
    }
    get inventoryButtons (){
        return $$('button[class="btn_inventory"]')
    }
    get shoppingCartLink (){
        return $('a[class="shopping_cart_link"]')
    }
    async viewShoppingCart(){
        await this.shoppingCartLink.click();
    }
    open(){
        return super.open("/inventory.html");
    }
}

export default new InventoryPage;