const { I } = inject();

class CartPage {
    
    checkoutButton = {xpath: '//div[@class = "pull-right"]/a[contains(@href, "checkout/checkout")]'};

    proceedToCheckout(){
        I.click(this.checkoutButton);
        I.see("Checkout");
    }

}

export = new CartPage();