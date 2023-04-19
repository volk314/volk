const { I } = inject();

class CheckoutPage {

    continueButton = {xpath: "(//input[@value='Continue'])[last()]"};
    confirmOrderButton = {xpath: "//input[@value='Confirm Order']"};
    agreeCheckbox = {xpath: "//input[@type = 'checkbox']"};

    placeOrder(){
        I.wait(2);
        I.click(this.continueButton);
        I.wait(2);
        I.click(this.continueButton);
        I.wait(2);
        I.click(this.continueButton);
        I.wait(2);
        I.click(this.agreeCheckbox);
        I.click(this.continueButton);
        I.click(this.confirmOrderButton);
    }

}

export = new CheckoutPage();