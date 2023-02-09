class DashboardPage{
    getTopBarHeader()
    {
        return cy.get('.oxd-topbar-header-title')
    }

    getAdminTab()
    {
        return cy.get('.oxd-main-menu li:nth-child(1)')
    }

}
export default DashboardPage;