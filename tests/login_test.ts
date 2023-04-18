import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/loginPage";

Feature('Login');

Scenario('Login',  ({ I }) => {

    const USER = {
        email: `anastasiia0.2687341244603123@mailinator.com`,
        password: "50p8c0ze"
    } 

    I.openStore();
    LandingPage.clickLoginLink();
    LoginPage.login(USER);
    I.see('My Affiliate Account');
});
