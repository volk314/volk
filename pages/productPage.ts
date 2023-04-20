const { I } = inject();

class ProductPage {

    addToCartButton = {xpath: '//button[contains(@id, "cart")]'};
    cartPreviewButton = {xpath: '//div[@id = "cart"]'};
    cartButton = {xpath: '//li/div/a[contains(@href, "checkout/cart") ]'};

    selectOption(dropdown: string, option: string){
        I.seeNumberOfElements(this.getDropdownLocator(dropdown), 1);
        I.click(this.getDropdownLocator(dropdown));
        I.click(this.getOptionLocator(option));
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

    getOptionLocator(option: string){
        return {xpath: `//a[contains(text(), '${option}')]`};
    }

    getDropdownLocator(name: string){
        return {xpath: `//label[text() = "${name}"]/following-sibling::div`};
    }

}

export = new ProductPage();