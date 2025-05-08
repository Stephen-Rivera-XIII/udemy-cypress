/// <reference types="cypress" />

Cypress.Commands.add('fillForm', (username, password)=>{
  cy.get('[data-testid="name-input"]').type(username)
  cy.get('[type="password"]').type(password)
})

const username = 'John Doe'
const password = 'password'


describe('forms, buttons, and inputs', () => {

  beforeEach(() => {
    cy.visit('https://www.practice-automation.com/form-fields')
  })
  it('title check', () => {
    cy.get('title').should('contain', 'Form Fields | Practice Automation')
  })
  it('ensure initial form id is correct', () => {
    cy.get('[id="feedbackForm"]').should('be.visible')
    cy.get('#feedbackForm').should('be.visible')
  })
  it('fill out name and password', () => {
    cy.get('[data-testid="name-input"]').type('John Doe')
    cy.get('[type="password"]').type('password')
  })
  it('checkbox and radial', () => {
    cy.get('[data-testid="drink1"]').check()
    cy.get('[value="Milk"]').check()
    cy.contains('Coffee').click()
    cy.get('[data-testid="color1"]').check()
    cy.get('[value="Blue"]').check()
    cy.contains('Green').click()
  })
  it('submit form', () => {
    cy.fillForm(username, password)
    cy.get('[data-testid="submit-btn"]').click()
    cy.wait(500)
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Message received!')
    })
  })

})