import helper from "../helpers/helper";

const { I } = inject();

class ProductPage {

    addToCartButton = {xpath: '//button[contains(@id, "button-cart")]'};
    cartPreviewButton = {xpath: '//div[@id = "cart"]'};
    cartButton = {xpath: '//li/div/a[contains(@href, "checkout/cart") ]'};
    priceLabel = {xpath: '//div[@class = "price"]/span'};

    async selectOptionAndGrabPrice(color: string | null, size: string | null): Promise <number>{
        let sizeAddPrice = 0;
        let colorAddPrice = 0;
        if (color) {
            await I.seeNumberOfElements(this.getDropdownLocator("Color"), 1);
            I.click(this.getDropdownLocator("Color"));
            colorAddPrice = await helper.parseOptionPrice(await I.grabTextFrom(this.getOptionLocator(color)));
            I.click(this.getOptionLocator(color));
        }
        if (size) {
            await I.seeNumberOfElements(this.getDropdownLocator("Size"), 1);
            I.click(this.getDropdownLocator("Size"));
            sizeAddPrice = await helper.parseOptionPrice(await I.grabTextFrom(this.getOptionLocator(size)));
            I.click(this.getOptionLocator(size));
        }
        return sizeAddPrice + colorAddPrice;
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