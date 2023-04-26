import User from "../helpers/interfaces";
import LoginPage = require("../pages/loginPage");

Feature('Login');

Scenario('Login',  async ({ I }) => {

    const USER: User = {
        email: `anastasiia0.2687341244603123@mailinator.com`,
        password: "50p8c0ze"
    };

    await LoginPage.login(USER);
    I.see('My Affiliate Account');
});
