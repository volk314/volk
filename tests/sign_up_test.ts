Feature('Sign up');

Scenario('Sign up',  ({ I }) => {

    let email = `anastasiia${Math.random()}@mailinator.com`;
    let cellPhone = "+38095641784";
    let pass = "50p8c0ze"
    console.log(email);

    I.amOnPage('http://opencart.qatestlab.net');
    I.click({xpath: '//*[@id="top-links"]/ul/li/span/span'});
    I.click({xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a'});
    I.waitForVisible({xpath: '//*[@id="input-firstname"]'});
    I.fillField({xpath: '//*[@id="input-firstname"]'}, "Anastasiia");
    I.fillField({xpath: '//*[@id="input-lastname"]'}, '6');
    I.fillField({xpath: '//*[@id="input-email"]'}, email);
    I.fillField({xpath: '//*[@id="input-telephone"]'}, cellPhone);
    I.fillField({xpath: '//*[@id="input-password"]'}, pass);
    I.fillField({xpath: '//*[@id="input-confirm"]'}, pass);
    I.click({xpath: '//*[@id="content"]/form/div/div/input[1]'});
    I.click({xpath: '//*[@id="content"]/form/div/div/input[2]'});
});
