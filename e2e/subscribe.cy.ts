describe('Verify the subscription', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('check valid email submit', () => {
      cy.getByData("email-input").type("toto@aol.com")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("exist").contains("toto@aol.com")
    })

    it('check invalid email submit', () => {

        cy.getByData("email-input").clear().type("toto")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
      })

    it('check alredy existing email submit', () => {
        cy.getByData("email-input").clear().type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
        cy.getByData("server-error-message").should("exist").contains("john@example.com")  
    })
      
  })