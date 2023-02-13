class LoginPage{

    userName ='input[name="userName"]';
    password ='input[name="password"]';
    login ='Submit';
    sucessMessage ='/html/body/div[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[1]/td/h3';

login(userName, password){
    cy.get(userName).type(userName)
    cy.get(password).type(password)
    cy.contains( login ).click()
}

verifyLogin(){

    this.login();
    cy.get(successMessage).should('be.visible')

    }
}
export default LoginPage;