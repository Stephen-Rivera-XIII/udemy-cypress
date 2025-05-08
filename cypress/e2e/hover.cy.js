/// <reference types="cypress" />

describe('hover', () => {
  it('testing hovering workaround since there isn\'t a hover command', () => {
    cy.visit('https://practice-automation.com/hover/')
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain', 'You did it!')
  })
})