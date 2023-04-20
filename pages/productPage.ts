import { ProductData } from "../helpers/interfaces";

const { I } = inject();

class ProductPage {

    addToCartButton = {xpath: '//button[contains(@id, "button-cart")]'};
    cartPreviewButton = {xpath: '//div[@id = "cart"]'};
    cartButton = {xpath: '//li/div/a[contains(@href, "checkout/cart") ]'};

    async selectOption(product: ProductData){
        if (product.color) {
            await I.seeNumberOfElements(this.getDropdownLocator("Color"), 1);
            I.click(this.getDropdownLocator("Color"));
            I.click(this.getOptionLocator(product.color));
        }
        if (product.size) {
            await I.seeNumberOfElements(this.getDropdownLocator("Size"), 1);
            I.click(this.getDropdownLocator("Size"));
            I.click(this.getOptionLocator(product.size));
        }
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