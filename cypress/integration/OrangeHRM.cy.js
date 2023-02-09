import LoginPage from "./OrangeHRM/LoginPage"
import DashboardPage from "./OrangeHRM/DashboardPage"
import AdminPage from "./OrangeHRM/AdminPage"
describe('OrangeHRM.com', function() {

beforeEach(function(){
cy.visitURL()
})


beforeEach(function(){                            
cy.fixture('OrangeHRM').then(function(arg)      
{
this.arg = arg
})
})

const loginPage = new LoginPage()         
const dashboardPage = new DashboardPage()
const adminPage = new AdminPage()
it('Login to OrangeHRM!', function() {

loginPage.getEnterUsernameTextBox().type(this.arg.userName)
loginPage.getEnterUsernameTextBox().should("have.value",this.arg.userName)
loginPage.getEnterPwdTextBox().type(this.arg.pwd)
loginPage.getEnterPwdTextBox().should("have.value",this.arg.pwd)
loginPage.getClickOnLoginButton().click()
dashboardPage.getTopBarHeader().should("have.text","Dashboard")

})

it.skip('Navigate to Admin Tab and add User!', function() {
loginPage.getEnterUsernameTextBox().type(this.arg.userName)
loginPage.getEnterUsernameTextBox().should("have.value",this.arg.userName)
loginPage.getEnterPwdTextBox().type(this.arg.pwd)
loginPage.getEnterPwdTextBox().should("have.value",this.arg.pwd)
loginPage.getClickOnLoginButton().click()
dashboardPage.getTopBarHeader().should("have.text","Dashboard")

dashboardPage.getAdminTab().click()
adminPage.getTopBarHeader().should("have.text","AdminUser Management") 
adminPage.getClickOnAddButton().click()
adminPage.getUserRoleSelectBox().click()
adminPage.getEmployeeNameTextBox().type(this.arg.empname)
cy.wait(5000)
adminPage.getAutocompleteData().click()
adminPage.getStatusSelectBox().click()
adminPage.getUserNameTextBox().type(this.arg.username)
adminPage.getEnterPwdTextBox().type(this.arg.password)
adminPage.getEnterConfirmPasswordTextBox().type(this.arg.confirmPwd)  
adminPage.getSaveButton().click()  
cy.contains('Success').should('be.visible')
})

/*it('Find Added User!', function() {
adminPage.getSearchButton().click()
adminPage.getUserNameTextBox().type(this.arg.username)
adminPage.getSearchButton().click()
})*/
})
