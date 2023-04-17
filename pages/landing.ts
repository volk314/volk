var { I } = inject();

module.exports = {

  accountMenuButton: {xpath: '//*[@id="top-links"]/ul/li/span/span'},
  registerButton: {xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a'},
  loginButton: {xpath: '//*[@id="page"]/header/div[1]/div[1]/div/div/div/div/div[2]/div/div[2]/a'},

  expandAccountMenu(){
    I.click(this.accountMenuButton);
  },

  clickRegisterLink(){
    I.click(this.registerButton);
  },

  clickLoginLink(){
    I.click(this.loginButton);
  }

}
