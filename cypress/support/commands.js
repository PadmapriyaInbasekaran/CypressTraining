// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('SelectChennai', (city) => { 
    cy.get(".sc-jlwm9r-1").click()
    const from = cy.contains("From").type(city)
    const autosuggestFrom = cy.get('.autoCompleteTitle')
    autosuggestFrom.each(($el, index, $list) => {
         
    if($el.text().includes('Chennai'))
    {
        $el.click()
    }
    })
})

Cypress.Commands.add('Login', (uname, pwd) => {
    cy.get("input[name='username']").type(uname)
    cy.get("input[name='password']").type(pwd)
    cy.get("button[type='submit']").click()
})

Cypress.Commands.add('visitURL', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})



// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })