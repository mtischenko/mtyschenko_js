const checkout = require("../pages/checkout");
const product = require("../pages/product");

const USER = {
    email: 'mty2@gmail.com',
    password: 'temp1234',
    firstName: 'Mary',
    lastName: 'Tyschenko',
    firstAddress: 'Khrechatyk Str 15',
    cityName: 'Kyiv',
    postCode: '03025',
};



Feature('purchase');

Scenario.only('buy product', async ({ I, basePage }) => {
    I.login(USER);
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=45");
    const productPrice = product.getProductPrice();
    product.selectProductAndCheckout();
    basePage.goToCart();
    product.clickCheckoutButton();
    I.waitForElement(checkout.existingUserBillingLabel);
    const isExistingUser = await tryTo(() => I.seeElement(checkout.existingUserBillingLabel));
    //const deliveryMethod = await tryTo(() => I.seeElement({xpath: "//*[@id='collapse-shipping-method']/div/div[1]/label"}));
    if (!isExistingUser){
        checkout.fillBillingDetails(USER);

    } 
    checkout.clickContinueButton();

    I.waitForElement(checkout.existingUserDeliveryLabel);
    const isExistingDeliveryAddress = await tryTo(() => I.seeElement(checkout.existingUserDeliveryLabel));
    console.log(isExistingDeliveryAddress);
    if (!isExistingDeliveryAddress) {
        checkout.fillBillingDetails(USER);

    }

    checkout.clickContinueButton();

    // if (deliveryMethod) {
    //     checkout.clickContinueButton();
    // }
    
    pause();
    
    

})