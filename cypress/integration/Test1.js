describe('My First Test', function() {
    it('Visit goibibo.com!', function() {
     
cy.visit("https://www.goibibo.com/")

cy.contains("Round-trip").click()
cy.SelectChennai("MAA")    //custom commands

const to = cy.get(':nth-child(2) > .sc-cidDSM > .sc-hGPBjI > .sc-bYoBSM').type("BLR", {force: true})
const autosuggestTo = cy.get('.autoCompleteTitle')
autosuggestTo.each(($el, index, $list) => {
     
if($el.text().includes('Bengaluru'))
{
    $el.click()
}
})

cy.contains("Departure").click()
cy.get('.DayPicker-Months > :nth-child(1)')

const deptDate = cy.get('.DayPicker-Months > :nth-child(1)').find(".DayPicker-Day ")
deptDate.each(($el, index, $list) => {
     
if($el.text().includes('29'))
{
$el.click()
}
})

cy.contains("Return").click()


const returnDate = cy.get('.DayPicker-Months > :nth-child(2)').find(".DayPicker-Day")
returnDate.each(($el, index, $list) => {
     
if($el.text().includes('26'))
{
$el.click()
}
})
cy.contains("Done").click()

cy.contains("Travellers & Class")
cy.contains("premium economy").click()
cy.contains("Done").click({force: true})

cy.contains("SEARCH FLIGHTS").click()
    })
  })