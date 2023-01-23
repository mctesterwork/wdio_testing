

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

}

module.exports = new SecurePage();
