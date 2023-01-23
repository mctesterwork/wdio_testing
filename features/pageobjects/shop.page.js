

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShopPage extends Page {
    /**
     * define selectors using getter methods
     */
    get shopHeaderTitle () {
        return $("//h1[normalize-space()='Shop']");
    }
    
    get selectOrder () {
        return $("(//select[@name='orderby'])[1]");
    }
    
    get firstItem () {
        return $("(//img[@class='attachment-woocommerce_thumbnail size-woocommerce_thumbnail'])[1]");
    }

    async select (text) {
        await this.selectOrder.click();
        await this.selectOrder.selectByVisibleText(text);
    }

    async clickButton () {
        await this.firstItem.click();
    }

    open () {
        return super.open('shop');
    }

}

module.exports = new ShopPage();