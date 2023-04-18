const { I } = inject();

class LoginPage {
    
    firstNameField = {xpath: '//*[@id="input-firstname"]'};
    lastNameField = {xpath: '//*[@id="input-lastname"]'};
    emailField = {xpath: '//*[@id="input-email"]'};
    cellPhoneField = {xpath: '//*[@id="input-telephone"]'};
    passwordField = {xpath: '//*[@id="input-password"]'};
    confirmPasswordField = {xpath: '//*[@id="input-confirm"]'};
    acceptTermsCheckbox = {xpath: '//input[@name="agree"]'};
    submitButton = {xpath: '//input[@type="submit"]'};
  
    signUp(email: string, cellPhone: string, password: string){
      I.see('Register Account');
      I.fillField(this.firstNameField, "Anastasiia");
      I.fillField(this.lastNameField, '6');
      I.fillField(this.emailField, email);
      I.fillField(this.cellPhoneField, cellPhone);
      I.fillField(this.passwordField, password);
      I.fillField(this.confirmPasswordField, password);
      I.click(this.acceptTermsCheckbox);
      I.click(this.submitButton);
    }
}

export = new LoginPage();