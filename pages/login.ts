var { I } = inject();

module.exports = {

  emailField: {xpath: '//*[@id="input-email"]'},
  passwordField: {xpath: '//*[@id="input-password"]'},
  submitButton: {xpath: '//input[@type="submit"]'},

  login(USER) {
    I.see('Returning Customer');
    I.fillField(this.emailField, USER.email);
    I.fillField(this.passwordField, USER.password);
    I.click(this.submitButton);
  }

}