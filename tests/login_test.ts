import { LandingPage } from "../pages/landingPage";

Feature('Login');

Scenario('Login',  ({ I, loginPage }) => {

    const USER = {
        email: `anastasiia0.2687341244603123@mailinator.com`,
        password: "50p8c0ze"
    } 

    //I.openStore();
    I.amOnPage('http://opencart.qatestlab.net');
    const landingPage = new LandingPage();
    landingPage.clickLoginLink();
    loginPage.login(USER);
    I.see('My Affiliate Account');
});
