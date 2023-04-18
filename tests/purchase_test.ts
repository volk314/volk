import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";

Feature('Purchase');

Scenario('Buy 1 product',  ({ I }) => {

    const USER = {
        email: `anastasiia0.2687341244603123@mailinator.com`,
        password: "50p8c0ze"
    } 

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=32&product_id=31');
    
});
