class SearchProducts
{
getSearchBox()
{
   return cy.get('#twotabsearchtextbox')
}

getMobileSpecification()
{
    return cy.contains("256 GB & above")
}

}
export default SearchProducts;