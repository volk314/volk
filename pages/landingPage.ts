const { I } = inject();

class LandingPage {
    
    accountMenuButton = {xpath: '//i[@class="material-icons-expand_more"]/preceding-sibling::span'};
    registerButton = {xpath: '//a[contains(@href, "register")]'};
    loginButton = {xpath: '//a[contains(@href, "login")]'};

    expandAccountMenu(){
        I.click(this.accountMenuButton);
    }
    
    clickRegisterLink(){
        I.click(this.registerButton);
    }
    
    clickLoginLink() {
        I.click(this.loginButton);
    };
}

export = new LandingPage();