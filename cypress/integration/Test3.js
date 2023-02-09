describe('My Third Test', function() {
    it('Visit bigbasket.com!', function() {

cy.visit("https://www.flipkart.com/grocery-supermart-store?marketplace=GROCERY")
cy.get('._8Phu0v')
cy.get("._166SQN").type("600082").type('Cypress.io{enter}')
cy.get("._3704LK").type("dal")
cy.get(".L0Z3Pu").click()
const dalList = cy.get("._36fx1h").find("._1AtVbE.col-12-12")
     const getItem = cy.get('._35mN4f').find('a[title = "Yellow Moong Dal (Split)"]').eq(1)
      cy.get('div div button:nth-child(2)').click();
       })  
    })
   

   
