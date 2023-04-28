const base = require("./pages/base");
const product = require("./pages/product");
const STORE_URL = 'http://opencart.qatestlab.net/index.php';

module.exports = function() {
  const signInButton = {xpath: "//a[text()='Sign In']"};
  const emailField = {css: "input#input-email"};
  const passwordlField = {css: "input#input-password"};



  return actor({
    
    openStore() {
      this.amOnPage(STORE_URL);
    },

    login(user) {
      this.openStore();
      this.click(signInButton);
      this.fillField(emailField, user.email);
      this.fillField(passwordlField, user.password);
      base.submitForm();
      this.see('My Orders');

    },

    selectProductAndCheckout() {
      let productPrice = this.grabTextFrom(product.productPrice);
      product.selectColor();
      product.selectSize();
      product.addToCart();
      base.clickCartIcon();
      base.clickViewCartButton();
 
    },


    
  });
}
