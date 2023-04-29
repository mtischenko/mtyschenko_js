const { I } = inject();

module.exports = {

  myAccountSpoiler: {xpath: "//span[text()='My Account']"},
  registerLink: {xpath: "//a[text()='Register']"},
  submitButton: {xpath: '//input[@type="submit"]'},
  cartIcon: {xpath: "//*[@id='cart']"},
  viewCartButton: {xpath: "//a[text()='View Cart']"},

  clickMyAccountSpoiler() {
    I.click(this.myAccountSpoiler);
  
  },

  clickMyRegisterLink() {
    I.click(this.registerLink);

  },

  submitForm() {
    I.click(this.submitButton);
  },

  clickCartIcon() {
    I.click(this.cartIcon);
  },

  clickViewCartButton() {
    I.click(this.viewCartButton);
  },

  goToCart() {
    this.clickCartIcon();
    this.clickViewCartButton();
  },
  
}
