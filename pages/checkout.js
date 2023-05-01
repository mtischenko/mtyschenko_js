const { I } = inject();

module.exports = {

  firstNameField: {xpath: "//*[@id='input-payment-firstname']"},
  lastNameField: {xpath: "//*[@id='input-payment-lastname']"},
  firstAddressField: {xpath: "//*[@id='input-payment-address-1']"},
  cityNameField: {xpath: "//*[@id='input-payment-city']"},
  postCodeField: {xpath: "//*[@id='input-payment-postcode']"},
  countryNameFieldSelect: {xpath: "//label[@for='input-payment-country']/following-sibling::div/div/a[@class='sbToggle']"},
  countryNameField: {xpath: "//li/a[@href='#220']"},
  regionNameFieldSelect: {xpath: "//label[@for='input-payment-zone']/following-sibling::div/div/a[@class='sbToggle']"},
  regionNameField: {xpath: "//li/a[@href='#3483']"},
  termsAndConditionsCheckBox: {xpath: "//input[@id='agree1']"},
  continueSubmitionButton: {xpath: "//input[@value='Continue'][last()]"},
  confirmCheckoutButton: {xpath: "//input[@id='button-confirm']"},

  existingUserBillingLabel: {xpath: "//*[@id='collapse-payment-address']/div/form/div[1]/label"},
  existingUserDeliveryLabel: {xpath: "//*[@id='collapse-shipping-address']/div/form/div[1]/label"},
  existingDeliveryMethod: {xpath: "//label[@for='shipping_methodflat.flat4']"},

  unitPrice: {xpath: "//table[@class='table table-bordered table-hover']/tbody/tr/td[4]"},
  totalProductPrice: {xpath: "//table[@class='table table-bordered table-hover']/tbody/tr/td[5]"},
  productQuantity: {xpath: "//table[@class='table table-bordered table-hover']/tbody/tr/td[3]"},
  shippingRate: {xpath: "//table[@class='table table-bordered table-hover']/tfoot/tr[2]/td[2]"},
  totalPrice: {xpath: "//table[@class='table table-bordered table-hover']/tfoot/tr[3]/td[2]"},

  shoppingCartItem: {xpath: "//div[@class='table-responsive']/table[@class='table table-bordered']/tbody/tr"},
  removeCartItem: {xpath: "//button[@data-original-title='Remove']"},

  fillBillingDetails(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.firstAddressField, user.firstAddress);
    I.fillField(this.cityNameField, user.cityName);
    I.fillField(this.postCodeField, user.postCode);
    I.click(this.countryNameFieldSelect);
    I.click(this.countryNameField);
    I.click(this.regionNameFieldSelect);
    I.click(this.regionNameField);

  },

  clickContinueButton() {
    I.click(this.continueSubmitionButton);
  },

  clickRemoveCartItem() {
    I.click(this.removeCartItem);
  },

}
