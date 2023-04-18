import { LandingPage } from "../pages/landingPage";

Feature('Sign up');

Scenario('Sign up',  ({ I, registerPage }) => {

    let email = `anastasiia${Math.random()}@mailinator.com`;
    let cellPhone = "+38095641784";
    let pass = "50p8c0ze"
    console.log(email);

    I.amOnPage('http://opencart.qatestlab.net');
    const landingPage = new LandingPage();
    landingPage.expandAccountMenu();
    landingPage.clickRegisterLink();
    registerPage.signUp(email, cellPhone, pass);
    I.see('Your Account Has Been Created!');
});
