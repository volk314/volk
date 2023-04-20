import productPage from "./productPage";

const { I } = inject();

class CartPage {
    
    checkoutButton = {xpath: '//div[@class = "pull-right"]/a[contains(@href, "checkout/checkout")]'};
    deleteButton = {xpath: '//button[@data-original-title="Remove"]'};

    proceedToCheckout(){
        I.seeNumberOfElements(this.checkoutButton, 1);
        I.click(this.checkoutButton);
        I.see("Checkout");
    }

    async clearCart(){
        I.click(productPage.cartPreviewButton);
        if (I.seeNumberOfElements(productPage.cartButton, 1)){
            I.click(productPage.cartButton);
            while(await I.grabNumberOfVisibleElements(this.deleteButton)>0){
                I.click(this.deleteButton);
            }
        } 
    }

}

export = new CartPage();