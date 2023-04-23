import LoginPage from "../pages/loginPage";
import ProductPage from "../pages/productPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import User from "../helpers/interfaces";

Feature('Purchase');

let products = new DataTable(['url', 'color', 'size']);
products.add(['/index.php?route=product/product&product_id=49', 'Green', 'Medium']);
products.add(['/index.php?route=product/product&product_id=74', 'Black', null]); //checkout failure?
products.add(['/index.php?route=product/product&product_id=73', null, null]);
products.add(['/index.php?route=product/product&product_id=48', 'Green', 'Large']);
products.add(['/index.php?route=product/product&product_id=43', 'Brown', null]); //options are absent
products.add(['/index.php?route=product/product&product_id=47', 'White', null]); //checkout failure?
products.add(['/index.php?route=product/product&product_id=60', null, null]); //checkout failure?

const USER: User = {
    email: `anastasiia0.2687341244603123@mailinator.com`,
    password: "50p8c0ze"
};

Before(async ({ I }) => { // or Background
    LoginPage.login(USER);
    I.see('My Affiliate Account');
    await CartPage.clearCart();
});

Data(products).Scenario('Buy 1 product',  async ({ I, current }) => {
    I.amOnPage(current.url);
    I.see('Product Code');
    await ProductPage.selectOption(current.color, current.size);
    ProductPage.addToCart();
    ProductPage.openCart();
    I.see("My Cart")
    await CartPage.proceedToCheckout();
    await CheckoutPage.placeOrder();
    I.see("Your order has been placed!");
});