
const USER = {
    email: 'testhfjshfkdsjfhsk@gmail.com',
    password: 'temp1234',

};
Feature('purchase');

Scenario.only('buy product',  ({ I }) => {
    I.login(USER);
})//.tag("buy");