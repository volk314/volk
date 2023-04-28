import User from "../helpers/interfaces";
import LandingPage from "../pages/landingPage";

const { I } = inject();

class LoginPage {
    
    emailField = {xpath: '//*[@id="input-email"]'};
    passwordField = {xpath: '//*[@id="input-password"]'};
    submitButton = {xpath: '//input[@type="submit"]'};

    async login(USER: User) {
        I.openStore();
        LandingPage.clickLoginLink();
        I.see('Returning Customer');
        I.fillField(this.emailField, USER.email);
        I.fillField(this.passwordField, USER.password);
        await I.seeNumberOfElements(this.submitButton, 1);
        I.click(this.submitButton);
    }
}

export = new LoginPage();