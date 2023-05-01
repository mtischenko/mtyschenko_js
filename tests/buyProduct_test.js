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
    basePage.clickCartIcon();

    const isCartEmpty = await tryTo(() => I.see("YOUR SHOPPING CART IS EMPTY!"));

    if (!isCartEmpty) {
        basePage.clickViewCartButton();
        const productsAmount = await I.grabNumberOfVisibleElements(checkout.shoppingCartItem);
        if (productsAmount > 0) {
          checkout.clickRemoveCartItem();
        }
    }

    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=45");
    product.selectProductAndCheckout();
    basePage.goToCart();
    product.clickCheckoutButton();

    I.waitForElement(checkout.existingUserBillingLabel);
    const isExistingUser = await tryTo(() => I.seeElement(checkout.existingUserBillingLabel));
    if (!isExistingUser){
        checkout.fillBillingDetails(USER);
    } 

    I.waitForElement(checkout.continueSubmitionButton);
    checkout.clickContinueButton();

    I.waitForElement(checkout.existingUserDeliveryLabel);
    const isExistingDeliveryAddress = await tryTo(() => I.seeElement(checkout.existingUserDeliveryLabel));

    if (!isExistingDeliveryAddress) {
        checkout.fillBillingDetails(USER);
    }

    I.waitForElement(checkout.continueSubmitionButton);
    checkout.clickContinueButton();

    I.waitForElement(checkout.continueSubmitionButton);
    checkout.clickContinueButton();

    I.waitForElement(checkout.termsAndConditionsCheckBox);
    I.checkOption(checkout.termsAndConditionsCheckBox);

    I.waitForElement(checkout.continueSubmitionButton);
    checkout.clickContinueButton();

    let unitPrice = await I.grabTextFrom(checkout.unitPrice);
    let totalProductPrice = await I.grabTextFrom(checkout.totalProductPrice);
    let productQuantity = await I.grabTextFrom(checkout.productQuantity);
    let shippingRate = await I.grabTextFrom(checkout.shippingRate);
    let totalPrice = await I.grabTextFrom(checkout.totalPrice);
    
    // remove $ sign
    unitPrice = unitPrice.slice(1);
    totalProductPrice = totalProductPrice.slice(1);
    shippingRate = shippingRate.slice(1);
    totalPrice = totalPrice.slice(1);
    
    // remove comma from the price
    unitPrice = unitPrice.replaceAll(",","");
    totalProductPrice = totalProductPrice.replaceAll(",","");
    shippingRate = shippingRate.replaceAll(",","");
    totalPrice = totalPrice.replaceAll(",","");

    I.assertEqual(parseFloat(unitPrice) * parseFloat(productQuantity), parseFloat(totalProductPrice));
    I.assertEqual(parseFloat(totalProductPrice) + parseFloat(shippingRate), parseFloat(totalPrice));

    I.click(checkout.confirmCheckoutButton);
    I.see('Your order has been placed!');

})