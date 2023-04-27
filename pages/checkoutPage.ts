import helper from "../helpers/helper";

const { I } = inject();

class CheckoutPage {

    continueLastButton = {xpath: "(//input[@value='Continue'])[last()]"};
    continueButton = {xpath: "//input[@value='Continue']"};
    confirmOrderButton = {xpath: "//input[@value='Confirm Order']"};
    agreeCheckbox = {xpath: "//input[@type = 'checkbox']"};
    price = {xpath: "(//table/tbody/tr/td[4])[1]"};

    async placeOrderAndGetFinalPrice(): Promise<number>{
        await I.seeNumberOfElements(this.continueButton, 1);
        I.click(this.continueButton);
        await I.seeNumberOfElements(this.continueButton, 2);
        I.click(this.continueButton);
        await I.seeNumberOfElements(this.continueButton, 3);
        I.click(this.continueButton);
        await I.seeNumberOfElements(this.continueButton, 4);
        I.click(this.agreeCheckbox);
        I.click(this.continueButton);
        let price = helper.parsePrice(await I.grabTextFrom(this.price));
        await I.seeNumberOfElements(this.confirmOrderButton, 1);
        I.click(this.confirmOrderButton);
        return price;
    }

}

export = new CheckoutPage();