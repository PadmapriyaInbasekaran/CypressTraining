describe('Reading data from the Json file', () => {
    var userName;
    var password;
   
   
    beforeEach(function () {
        cy.fixture('loginTestData').then((testData) => {
            userName = testData.userName;
            password = testData.password;
    
        })
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
    })

    it('VerifyLogin', () => {
        cy.get('input[name="userName"]').type(userName)
        cy.get('input[name="password"]').type(password)
        cy.contains('Submit').click()

    })


})