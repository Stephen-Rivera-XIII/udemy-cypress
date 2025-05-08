/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
  })
	//explains the suite
	it('assert URL', () => {
		//explains specific test
		cy.url().should('include', 'example.com')
	})

	it('assert title', () => {
		cy.title().should('eq', 'Example Domain')
	})

	it('assert h1 element', () => {
		cy.get('h1').should('have.text', 'Example Domain')
	})

	it('assert p element', () => {
		cy.get('p')
			.eq(0)
			.should(
				'contain.text',
				'This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.'
			)
		cy.get('p').eq(1).should('contain', 'More information...')
		cy.get('p')
			.eq(1)
			.find('a')
			.should('have.attr', 'href')
			.and('include', 'https://www.iana.org/domains/example')
	})
  
  it('Reload and logs', () =>{
    cy.log('YES MNELLO YES I AM BEFORE RELOAD')
    cy.reload()
    cy.log('YES MNELLO YES I AM AFTER RELOAD')
  })
})
