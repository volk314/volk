var { I } = inject();

module.exports = {

  emailField: {xpath: '//*[@id="input-email"]'},
  passwordField: {xpath: '//*[@id="input-password"]'},
  submitButton: {xpath: '//input[@type="submit"]'},

  login(email: string, password: string) {
    I.see('Returning Customer');
    I.fillField(this.emailField, email);
    I.fillField(this.passwordField, password);
    I.click(this.submitButton);
  }

}