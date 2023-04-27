Feature('register');

const NEW_USER = {
    firstName: 'Mary',
    lastName: '10',
    email: Date.now() + '@gmail.com',
    phoneNumber: '+152369587',
    password: 'hst!25361',

};

Scenario('register new user',  ({ I, basePage, registerPage }) => {
    I.openStore();
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
    registerPage.verifyRegisterAccount();
    
});