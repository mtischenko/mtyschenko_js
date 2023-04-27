Feature('register');

const NEW_USER = {
    firstName: 'Mary',
    lastName: '10',
    email: Date.now() + '@gmail.com',
    phoneNumber: '+152369587',
    password: 'hst!25361',

};

Scenario.only('register new user',  ({ I, basePage, registerPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php');
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.verifyRegisterAccount();
    
});