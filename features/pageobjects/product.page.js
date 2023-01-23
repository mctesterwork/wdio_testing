

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get Description () {
        return $("//h1[normalize-space()='Very Ugly Doll']");
    }
}

module.exports = new ProductPage();