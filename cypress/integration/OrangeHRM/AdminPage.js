class AdminPage{
   

    getTopBarHeader()
    {
        return cy.get('.oxd-topbar-header-title')
    }

    getClickOnAddButton()
    {
        return cy.contains('Add')
    }

    getUserRoleSelectBox()
    {
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        return cy.get(".oxd-select-dropdown").contains("Admin")
    }

    getEmployeeNameTextBox()
    {
        return cy.get("input[placeholder='Type for hints...']")
    }

    getAutocompleteData()
    {
        return cy.get(".oxd-autocomplete-dropdown")
    }

    getStatusSelectBox()
    {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        return cy.get(".oxd-select-dropdown").contains("Enabled")
    }

    getUserNameTextBox()
    {
        return cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

    getEnterPwdTextBox()
    {
        return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

    getEnterConfirmPasswordTextBox()
    {
       return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input') 
    }

    getSaveButton()
    {
        return cy.contains("Save")
    }

    getSearchButton()
    {
        return cy.contains("Search")
    }

   
}
export default AdminPage;