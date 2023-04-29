const { I } = inject();

module.exports = {

  productPrice: {xpath: "//div/span[@class='price-new']"},
  productColorSelect: {xpath: "//label[@for='input-option23']/following-sibling::div/a[@class='sbToggle']"},
  productColor: {xpath: "//li/a[@href='#67']"},
  productSizeSelect: {xpath: "//label[@for='input-option24']/following-sibling::div/a[@class='sbToggle']"},
  productSize: {xpath: "//li/a[@href='#69']"},
  addProductToCart: {xpath: "//*[@id='button-cart']"},
  checkoutButton: {xpath: "//*[@class='pull-right']/a"},

  firstNameField: {xpath: "//*[@id='input-payment-firstname']"},
  lastNameField: {xpath: "//*[@id='input-payment-lastname']"},
  //companyName: {xpath: "//*[@id='input-payment-company']"},
  firstAddressField: {xpath: "//*[@id='input-payment-address-1']"},
  cityNameField: {xpath: "//*[@id='input-payment-city']"},
  postCodeField: {xpath: "//*[@id='input-payment-postcode']"},
  countryNameField: {xpath: ""},
  paymentAddressContinueButton: {xpath: "//*[@id='button-payment-address']"},
  shippingAddressContinueButton: {xpath: "//*[@id='button-shipping-address']"},
  shippingMethodContinueButton: {xpath: "//*[@id='button-shipping-method]"},
  licenseAgreementCheckbox: {xpath: "//*[@id='agree1']"},
  paymentMethodContinueButton: {xpath: "//*[@id='button-payment-method']"},
  confirmOrderButton: {xpath: "//*[@id='button-confirm']"},


  selectColor() {
    I.click(this.productColorSelect);
    I.click(this.productColor);
  },

  selectSize() {
    I.click(this.productSizeSelect);
    I.click(this.productSize);
  },

  addToCart() {
    I.click(this.addProductToCart);
  },

  clickCheckoutButton() {
    I.click(this.checkoutButton);
  },

  fillBillingDetails() {
    I.fillField(this.firstName);
  },

  selectProductAndCheckout() {
    this.selectColor();
    this.selectSize();
    this.addToCart();
    
  },

  getProductPrice() {
    return I.grabTextFrom(this.productPrice);
  },


}
