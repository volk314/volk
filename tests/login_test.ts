Feature('Login');

Scenario('Login',  ({ I, landingPage, loginPage }) => {

    let email = `anastasiia0.2687341244603123@mailinator.com`;
    let pass = "50p8c0ze"

    I.amOnPage('http://opencart.qatestlab.net');
    landingPage.clickLoginLink();
    loginPage.login(email, pass);
    I.see('My Affiliate Account');
});
