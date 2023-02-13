/// <reference types="cypress" />

describe('Assertion Demo', () => {

    it('AssertionExampleTest', () => {
        cy.visit('https://example.cypress.io/')

        let pageTile ="Kitchen Sink"

   assert.equal(pageTile,"Kitchen Sink", "Page title didn't matched")

})



})