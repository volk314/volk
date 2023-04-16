Feature('Login');

Scenario('Login',  ({ I }) => {

    let email = `anastasiia0.2687341244603123@mailinator.com`;
    let pass = "50p8c0ze"

    I.amOnPage('http://opencart.qatestlab.net');
    I.click({xpath: '//*[@id="page"]/header/div[1]/div[1]/div/div/div/div/div[2]/div/div[2]/a'});
    I.fillField({xpath: '//*[@id="input-email"]'}, email);
    I.fillField({xpath: '//*[@id="input-password"]'}, pass);
    I.click({xpath: '//*[@id="content"]/div/div[2]/div/form/input'});

});
