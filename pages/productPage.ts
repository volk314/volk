
const { I } = inject();

class ProductPage {

    addToCartButton = {xpath: '//button[contains(@id, "button-cart")]'};
    cartPreviewButton = {xpath: '//div[@id = "cart"]'};
    cartButton = {xpath: '//li/div/a[contains(@href, "checkout/cart") ]'};

    async selectOption(color: string | null, size: string | null){
        if (color) {
            await I.seeNumberOfElements(this.getDropdownLocator("Color"), 1);
            I.click(this.getDropdownLocator("Color"));
            I.click(this.getOptionLocator(color));
        }
        if (size) {
            await I.seeNumberOfElements(this.getDropdownLocator("Size"), 1);
            I.click(this.getDropdownLocator("Size"));
            I.click(this.getOptionLocator(size));
        }
    }

    addToCart(){
        I.click(this.addToCartButton);
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