

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get backToShop () {
        return $("//a[normalize-space()='Return to shop']");
    }

    async clickButton () {
        await this.backToShop.click();
    }

    open () {
        return super.open('cart');
    }

}

module.exports = new CartPage();