import productPage from "./productPage";

const { I } = inject();

class CartPage {
    
    checkoutButton = {xpath: '//div[@class = "pull-right"]/a[contains(@href, "checkout/checkout")]'};
    deleteButton = {xpath: '//button[@data-original-title="Remove"]'};

    async proceedToCheckout(){
        I.seeNumberOfElements(this.checkoutButton, 1);
        I.click(this.checkoutButton);
        I.see("Checkout");
    }

    async clearCart(){
        I.click(productPage.cartPreviewButton);
        if (await I.grabNumberOfVisibleElements(productPage.cartButton)){
            I.click(productPage.cartButton);
            while(await I.seeElement(this.deleteButton)){
                I.click(this.deleteButton);
            }
        }
    }

}

export = new CartPage();