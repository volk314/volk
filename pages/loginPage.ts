const { I } = inject();

class LoginPage {
    
    emailField = {xpath: '//*[@id="input-email"]'};
    passwordField = {xpath: '//*[@id="input-password"]'};
    submitButton = {xpath: '//input[@type="submit"]'};

    login(USER: any) {
        I.see('Returning Customer');
        I.fillField(this.emailField, USER.email);
        I.fillField(this.passwordField, USER.password);
        I.click(this.submitButton);
    }
}

export = new LoginPage();