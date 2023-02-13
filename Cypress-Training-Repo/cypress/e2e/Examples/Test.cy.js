describe('Test suite', () => {
    before(function () {
        cy.log('Before method')
    })
    
    after(function () {
        cy.log('after method')
    })
    
     beforeEach(function(){
        cy.log('Before each')
     })
    
     afterEach(function(){
        cy.log('Before each')
     })


    it('seraching', () => {
        cy.log("Searching a product")
    })

    it('Advance search', () => {
        cy.log("Searching a with Advance search")
    })

    it('VerifyProductsList', () => {
        cy.log("Product list")
    })

})


