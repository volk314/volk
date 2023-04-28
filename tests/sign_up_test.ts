import landingPage from "../pages/landingPage";
import registerPage from "../pages/registerPage";

Feature('Sign up');

Scenario('Sign up',  ({ I }) => {

    let email = `anastasiia${Math.random()}@mailinator.com`;
    let cellPhone = "+38095641784";
    let pass = "50p8c0ze"
    console.log(email);

    I.openStore();
    landingPage.expandAccountMenu();
    landingPage.clickRegisterLink();
    registerPage.signUp(email, cellPhone, pass);
    I.see('Your Account Has Been Created!');
});
