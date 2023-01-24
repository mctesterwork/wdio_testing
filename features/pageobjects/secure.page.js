

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get Alert () {
        return $("//div[@class='woocommerce']//li[1]");
    }

    get logoutLink () {
        return $("//a[normalize-space()='Log out']");
    }

    get searchBox() {
        return $("//input[@id='woocommerce-product-search-field-0']");
    }

    async search (keyword) {
        await this.searchBox.click();
        await this.searchBox.setValue(keyword);
        await browser.keys("\uE007"); 
    }

}

module.exports = new SecurePage();
