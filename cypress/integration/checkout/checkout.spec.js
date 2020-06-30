/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Fintech - App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Personal Data - screen', () => {
    cy.get('#rg')
      .type('404642913').should('have.value', '40 464 291 - 3')
    cy.get('#emission')
      .type('25041994').should('have.value', '25/04/1994')
    cy.get('#dispatcher')
      .select('SSP')
    cy.get('label[for="M"]')
      .click()
    cy.get('#submit')
      .click()
    cy.get('.toast-message .toast-message__title')
      .should('have.text', 'Usuário inserido com sucesso')
  })
})
