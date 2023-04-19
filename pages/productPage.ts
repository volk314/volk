const { I } = inject();

class ProductPage {
    
    selectColorDropdown = {xpath: '//*[@id="input-option7"]'};
    selectSizeDropdown = {xpath: '//*[@id="input-option8"]'};
    addToCartButton = {xpath: '//button[contains(@id, "cart")]'};
    cartPreviewButton = {xpath: '//div[@id = "cart"]'};
    cartButton = {xpath: '//li/div/a[contains(@href, "checkout/cart") ]'};

    selectColor(){
        I.click(this.selectColorDropdown);
        pause();
    }

    selectSize(){
        I.click(this.selectSizeDropdown);
        pause();
    }

    addToCart(){
        I.click(this.addToCartButton);
        I.wait(1);
        I.see('Success');
    }

    openCart(){
        I.click(this.cartPreviewButton);
        I.click(this.cartButton);
    }

}

export = new ProductPage();