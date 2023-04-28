import User from "../helpers/interfaces";
import loginPage from "../pages/loginPage";

Feature('Login');

Scenario('Login',  async ({ I }) => {

    const USER: User = {
        email: `anastasiia0.2687341244603123@mailinator.com`,
        password: "50p8c0ze"
    };

    await loginPage.login(USER);
    I.see('My Affiliate Account');
});
