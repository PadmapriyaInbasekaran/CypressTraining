import SearchProducts from "./Amazon/SearchProducts"
describe('My Second Test', function() {
it('Visit amazon.com!', function() {
//calling fixture file
cy.fixture('Amazon').then(function(data)
{
this.data = data
})

cy.visit("https://www.amazon.in/")
const searchProduct = new SearchProducts()
searchProduct.getSearchBox().type("mobiles")
searchProduct.getMobileSpecification().click()

const mobileList = cy.get('.s-title-instructions-style')
mobileList.each(($el, index, $list) => {
     
    if($el.text().includes(this.data.mobileName))
    {
        cy.get('.s-title-instructions-style').eq(index).click({force: true})
    }
    })
    })
})