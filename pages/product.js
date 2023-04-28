const { I } = inject();

module.exports = {

  productPrice: {xpath: "//div/span[@class='price-new']"},
  productColorSelect: {xpath: "//label[@for='input-option23']/following-sibling::div/a[@class='sbToggle']"},
  productColor: {xpath: "//li/a[@href='#67']"},
  productSizeSelect: {xpath: "//label[@for='input-option24']/following-sibling::div/a[@class='sbToggle']"},
  productSize: {xpath: "//li/a[@href='#69']"},
  addProductToCart: {xpath: "//*[@id='button-cart']"},

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


}
