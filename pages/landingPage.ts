const { I } = inject();

export class LandingPage {
    
    accountMenuButton = {xpath: '//i[@class="material-icons-expand_more"]/preceding-sibling::span'};
    registerButton = {xpath: '//a[contains(@href, "register")]'};
    loginButton = {xpath: '//a[contains(@href, "login")]'};

    public expandAccountMenu(){
        I.click(this.accountMenuButton);
    }
    
    public clickRegisterLink(){
        I.click(this.registerButton);
    }
    
    public clickLoginLink() {
        I.click(this.loginButton);
    };
}
