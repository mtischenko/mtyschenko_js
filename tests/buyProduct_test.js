const product = require("../pages/product");

const USER = {
    email: 'mty@gmail.com',
    password: 'temp1234',

};

Feature('purchase');

Scenario.only('buy product', ({ I, basePage }) => {
    I.login(USER);
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=45");
    const productPrice = product.getProductPrice();
    product.selectProductAndCheckout();
    basePage.goToCart();
    //pause();
    
})