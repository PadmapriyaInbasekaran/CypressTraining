class LoginPage {

getEnterUsernameTextBox()
{
   return cy.get("input[name='username']")
}

getEnterPwdTextBox()
{
    return cy.get("input[name='password']")
}

getClickOnLoginButton()
{
    return cy.get("button[type='submit']")
}
}

export default LoginPage;