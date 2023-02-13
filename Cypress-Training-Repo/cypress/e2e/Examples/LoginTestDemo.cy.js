
import LoginPage from '../.LoginPage';
/// <reference types="cypress" />
describe('AsertionsSuite', () => {
    it('POM', () => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')

 var loginPage = new LoginPage();
 loginPage.login('siddu', 'Siddu@123');
       })

})
