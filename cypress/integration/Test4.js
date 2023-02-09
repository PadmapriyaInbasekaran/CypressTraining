describe('My First Test', function() {
    it('Visit orangeHRM.com!', function() {
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//Login
cy.Login("Admin", "admin123")
//Leave tab
cy.get('.oxd-main-menu li:nth-child(1)').click()
//Assign leave
cy.get('.oxd-topbar-body li:nth-child(6)').click().contains('Assign Leave').click()

cy.get("input[placeholder='Type for hints...']").type("Peter")
cy.wait(1000)
cy.get(".oxd-autocomplete-dropdown").click()

cy.get(".oxd-select-wrapper").click()
cy.get(".oxd-select-dropdown").contains("CAN - Personal").click()

cy.get('.oxd-grid-4 .oxd-grid-item:nth-child(1)').click()
cy.get(".oxd-date-input-calendar").contains("2").click()

cy.get('.oxd-grid-4 .oxd-grid-item:nth-child(2)').click()
cy.get(".oxd-date-input-calendar").contains("3").click()

cy.get('button[type="submit"]').click()

})
})