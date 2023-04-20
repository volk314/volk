import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import { User } from "../helpers/interfaces";
import Products from "../testdata/products";

Feature('Purchase');

let products = new DataTable(['id', 'color', 'size']);
products.add(['49', 'Green', 'Medium']);
products.add(['74', 'Black', undefined]);
products.add(['73', undefined, undefined]);
products.add(['43', 'Brown', undefined]);
products.add(['47', 'White', undefined]);
products.add(['60', undefined, undefined]);

const USER: User = {
    email: `anastasiia0.2687341244603123@mailinator.com`,
    password: "50p8c0ze"
} 

Data(products).Scenario('Buy 1 product',  async ({ I, current }) => {
    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
    I.amOnPage(Products.getProductUrl(current.id));
    I.see('Product Code');
    await ProductPage.selectOption(current.color, current.size);
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    await CartPage.proceedToCheckout();
    await CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});