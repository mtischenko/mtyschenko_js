const { groupCollapsed } = require("console");

const USER = {
    email: 'testhfjshfkdsjfhsk@gmail.com',
    password: 'temp1234',

};

Feature('purchase');

Scenario.only('buy product',  ({ I }) => {
    I.login(USER);
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=45");
    I.selectProductAndCheckout();
    I.wait(5);
    
})//.tag("buy");