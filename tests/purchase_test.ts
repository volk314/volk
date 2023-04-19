import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";

Feature('Purchase');

Scenario('Buy 1 product with no options',  ({ I }) => {

    const USER = {
        email: `anastasiia0.2687341244603123@mailinator.com`,
        password: "50p8c0ze"
    } 

    const petCarrier = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=43";
    const clippers = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=74";
    const dryCatFood = "http://opencart.qatestlab.net/index.php?route=product/product&product_id=73";

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    I.amOnPage(dryCatFood);
    I.see('Product Code');
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    CartPage.proceedToCheckout();
    CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});
