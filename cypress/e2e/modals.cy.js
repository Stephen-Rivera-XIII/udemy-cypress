/// <reference types="cypress" />

beforeEach(() => {
	cy.visit('https://practice-automation.com/modals/')
})

describe('Modal btns exist', () => {
	it('passes', () => {
		cy.get('#simpleModal').should('be.visible')
		cy.get('#formModal').should
	})

	it('simple modal button functionality', () => {
		cy.get('#simpleModal').click()
		cy.get('#popmake-1318').should('be.visible')
	})

	it('form modal button functionality', () => {
		cy.get('#formModal').click()
		cy.get('#popmake-674').should('be.visible')
		cy.get('#g1051-name').type('John Doe')
    cy.intercept('GET', '**/modals/**').as('formSubmit')
		cy.contains('button', 'Submit').click()
    cy.wait('@formSubmit').its('response.statusCode').should('eq', 200)
		cy.get('#popmake-674',{timeout: 10000}).should('not.be.visible')
	})
})
