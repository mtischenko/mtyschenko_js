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
  continueSubmitionButton: {xpath: "//input[@value='Continue'][last()]"},

  existingUserBillingLabel: {xpath: "//*[@id='collapse-payment-address']/div/form/div[1]/label"},
  existingUserDeliveryLabel: {xpath: "//*[@id='collapse-shipping-address']/div/form/div[1]/label"},

//   paymentAddressContinueButton: {xpath: "//*[@id='button-payment-address']"},
//   shippingAddressContinueButton: {xpath: "//*[@id='button-shipping-address']"},
//   shippingMethodContinueButton: {xpath: "//*[@id='button-shipping-method]"},
//   licenseAgreementCheckbox: {xpath: "//*[@id='agree1']"},
//   paymentMethodContinueButton: {xpath: "//*[@id='button-payment-method']"},
//   confirmOrderButton: {xpath: "//*[@id='button-confirm']"},

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

}
