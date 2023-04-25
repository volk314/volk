import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import User, { Product } from "../helpers/interfaces";
import productPage from "../pages/productPage";
import cartPage from "../pages/cartPage";
var assert = require('assert');

const products = readAndParseData();

Feature('Purchase');

const USER: User = {
    email: `anastasiia0.2687341244603123@mailinator.com`,
    password: "50p8c0ze"
};

Before(async ({ I }) => {
    await LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
});

Data(products).Scenario('Buy 1 product',  async ({ I, current }) => {
    I.amOnPage(current.url);
    I.see('Product Code');
    let price: number = parseFloat((await I.grabTextFrom(productPage.priceLabel)).split('$')[1]);
    price = price + await ProductPage.selectOption(current.color, current.size);
    ProductPage.addToCart();
    ProductPage.openCart();
    await I.see("My Cart");
    if (await I.grabNumberOfVisibleElements(cartPage.productUnavailableLabel)){
        console.log("This product is unavailable for purchase.");
    } else {
        await CartPage.proceedToCheckout();
        let checkoutPrice: number = await CheckoutPage.placeOrder();
        assert.equal(price, checkoutPrice);
        I.see("Your order has been placed!");
    }
});

function readAndParseData(): CodeceptJS.DataTable {
    const fs = require('fs');
    const jsonData = fs.readFileSync('testdata/testdata.json', {encoding:'utf8', flag:'r'});
    let data: { products: Record<string, Product> } = JSON.parse(jsonData);
    let products: Product[] = Object.values(data.products); 
    const dataTable = new DataTable(['url', 'color', 'size']);
    products.forEach((product: Product) => {
      dataTable.add([product.url, product.color || '', product.size || '']);
    });
    return dataTable;
  }