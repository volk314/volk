import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import { User } from "../helpers/interfaces";

Feature('Purchase');

const petCarrier = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=43";
const clippers = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=74";
const dryCatFood = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=73";
const petRug = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=45";

const USER: User = {
    email: `anastasiia0.2687341244603123@mailinator.com`,
    password: "50p8c0ze"
} 

Scenario('Buy 1 product without options',  async ({ I }) => {

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
    I.amOnPage(dryCatFood);
    I.see('Product Code');
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    CartPage.proceedToCheckout();
    CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});

Scenario('Buy 1 product with color option',  async ({ I }) => {

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
    I.amOnPage(clippers);
    I.see('Product Code');
    ProductPage.selectOption("Color", "Black");
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    CartPage.proceedToCheckout();
    CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});

Scenario('Buy 1 product with two options',  async ({ I }) => {

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
    I.amOnPage(petRug);
    I.see('Product Code');
    ProductPage.selectOption("Color", "Green");
    ProductPage.selectOption("Size", "Medium");
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    CartPage.proceedToCheckout();
    CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});