const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const CartPage = require('../pageobjects/cart.page');
const ShopPage = require('../pageobjects/shop.page');
const ProductPage = require('../pageobjects/product.page');

const pages = {
    login: LoginPage,
    cart: CartPage,
    shop: ShopPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    if(page == "home")
    {
        await browser.url("https://migueltestingsite.com/");
    }
    else
    {
        await pages[page].open();
    }
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

When(/^I click on the back to shop button$/, async () => {
    await CartPage.clickButton();
});

When(/^I select the option:(.+)$/, async (text) => {
    await ShopPage.select(text);
});

When(/^I click on the first shop item$/, async () => {
    await ShopPage.clickButton();
});

When(/^I enter (\w+) into the searchbar$/, async (keyword) => {
    await SecurePage.search(keyword);
});

Then(/^I should see the logout link$/, async () => {
    await expect(SecurePage.logoutLink).toBeExisting();
});

Then(/^I should see the shop header$/, async () => {
    await expect(ShopPage.shopHeaderTitle).toBeExisting();
});

Then(/^I should see an error message saying (.*)$/, async (message) => {
    await expect(SecurePage.Alert).toBeExisting();
    await expect(SecurePage.Alert).toHaveTextContaining(message);
});

Then(/^I should see the text:(.*)$/, async (message) => {
    await expect(ProductPage.Description).toBeExisting();
    await expect(ProductPage.Description).toHaveTextContaining(message);
});

Then(/^I should see the product (.+)$/, async (product) => {
    await expect(ShopPage.product(product)).toBeExisting();
});