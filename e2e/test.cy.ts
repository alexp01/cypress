describe('Verify the resto menu options', () => {
    beforeEach(() => {
      cy.visit('http://www.namaste-india.fr/')
    })
  
    it('check Restaurant menu option', () => {
      let resto_button = cy.get('.mainlevel-nav').eq(1)
      resto_button.should("exist").contains("Restaurant").click()
      cy.url().should('contains', 'restaurant.html')
    })

    it('check Commande menu option', () => {
      let resto_button = cy.get('.mainlevel-nav').eq(2)
      resto_button.should("exist").contains("Commande").click()
      cy.url().should('contains', 'commande.html')
    })

  })



  