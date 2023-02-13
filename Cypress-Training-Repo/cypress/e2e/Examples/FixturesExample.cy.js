/// <reference types="cypress" />

var userName;
var password;
before(function () {
        cy.fixture('login.json').then(function (data) {
        // this.data = data;
        userName = data.userName;
        password = data.password;
        cy.log("user name:   " + userName)
        cy.log("password:    " + password)

    })


})
describe('Test suite', () => {

    it('Launch application', () => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('input[name="userName"]').type(userName)
        cy.get('input[name="password"]').type(password)
        cy.contains('Submit').click()
    })

})
