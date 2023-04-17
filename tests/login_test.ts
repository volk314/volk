Feature('Login');

Scenario('Login',  ({ I, landingPage }) => {

    let email = `anastasiia0.2687341244603123@mailinator.com`;
    let pass = "50p8c0ze"

    I.amOnPage('http://opencart.qatestlab.net');
    landingPage.clickLoginLink();
    I.fillField({xpath: '//*[@id="input-email"]'}, email);
    I.fillField({xpath: '//*[@id="input-password"]'}, pass);
    I.click({xpath: '//*[@id="content"]/div/div[2]/div/form/input'});
    I.see('My Affiliate Account');
});
