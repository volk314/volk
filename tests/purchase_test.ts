import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";

Feature('Purchase');

xScenario('Buy 1 product',  ({ I }) => {

    const USER = {
        email: `anastasiia0.2687341244603123@mailinator.com`,
        password: "50p8c0ze"
    } 

    I.amOnPage('http://opencart.qatestlab.net');
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=32&product_id=31');
    
});
