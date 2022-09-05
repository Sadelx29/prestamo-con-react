beforeEach(() => {
  cy.visit('http://localhost:3000/')
})


it('calculadora "case 1"', () => {
  cy.get('input').first().type('3000')
  cy.get('select').select('3 meses')
  cy.get('form').submit()
  
})



it('calculadora "case 1"', () => {
  cy.get('input').first().type('3000')
  cy.get('select').select('6 meses')
  cy.get('form').submit()
})

it('calculadora "case 1"', () => {
  cy.get('input').first().type('3000')
  cy.get('select').select('12 meses')
  cy.get('form').submit()
})

it('calculadora "case 1"', () => {
  cy.get('input').first().type('3000')
  cy.get('select').select('24 meses')
  cy.get('form').submit()
})