import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import { User, ProductData } from "../helpers/interfaces";
import Products = require("../testdata/products");

Feature('Purchase');

const smallPetCarrier: ProductData = { id: "49", color: "Green", size: "Medium" };
const clippers: ProductData = { id: "74", color: "Black", size: undefined };
const dryCatFood: ProductData = { id: "73", color: undefined, size: undefined };
const petCarrier : ProductData = { id: "43", color: "Brown", size: undefined };
const autoFeeder : ProductData = { id: "47", color: "White", size: undefined };
const hammock: ProductData = { id: "60", color: undefined, size: undefined };

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
    I.amOnPage(Products.getProductUrl(dryCatFood));
    I.see('Product Code');
    await ProductPage.selectOption(dryCatFood);
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    await CartPage.proceedToCheckout();
    await CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});

Scenario('Buy 1 product with color option',  async ({ I }) => {

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
    I.amOnPage(Products.getProductUrl(clippers));
    I.see('Product Code');
    await ProductPage.selectOption(clippers);
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    await CartPage.proceedToCheckout();
    await CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});

Scenario('Buy 1 product with two options',  async ({ I }) => {

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
    I.amOnPage(Products.getProductUrl(smallPetCarrier));
    I.see('Product Code');
    await ProductPage.selectOption(smallPetCarrier);
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    await CartPage.proceedToCheckout();
    await CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});