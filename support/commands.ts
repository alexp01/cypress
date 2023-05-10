/// <reference types="cypress" />


Cypress.Commands.add("getByData", (selector) => {
    //console.log(`[data-test=${selector}]`)
    return cy.get(`[data-test=${selector}]`)
  })
