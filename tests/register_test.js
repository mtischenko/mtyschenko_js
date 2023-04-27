const base = require("../pages/base");

Feature('register');

const NEW_USER = {
    firstName: 'Mary',
    lastName: '10',
    email: Date.now() + '@gmail.com',
    phoneNumber: '+152369587',
    password: 'hst!25361',
    passwordConfirm: 'hst!25361',

};

Scenario.only('register new user',  ({ I, basePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
    
});

Scenario('grab price',  async ({ I }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=20&product_id=29');
    const price = await I.grabTextFrom({xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]'});
    console.log(price);

});
