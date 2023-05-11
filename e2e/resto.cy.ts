describe('Verify the resto menu options', () => {
  beforeEach(() => {
    cy.visit('http://www.namaste-india.fr/')
  })

  context ('check Restaurant menu option', () => {
    it('click Restaurant menu option', () => {
      let resto_button = cy.get('.mainlevel-nav').eq(1)
      resto_button.should("exist").contains("Restaurant").click()
      //resto_button.invoke('attr', 'id').should('eq', 'active_menu-nav') 
      // the above line gives an error, probably because the DOM was refreshed.
      cy.get('.mainlevel-nav').eq(1).invoke('attr', 'id').should('eq', 'active_menu-nav') 
      cy.get('.mainlevel-nav').eq(1).should('have.attr', 'id', 'active_menu-nav')
      // there are 2 ways to check an atribute value
    })

    it('verify Restaurant url', () => {
      cy.get('.mainlevel-nav').eq(1).should("exist").contains("Restaurant").click()
      // there are 2 ways to check the URL
      cy.url().should('contains', 'restaurant.html')
      cy.location("pathname").should('contains', 'restaurant.html') 
      cy.log(cy.location("pathname"))
    })
  })

  context ('check Commande menu option', () => {
    it('click Commande menu option', () => {
      let resto_button = cy.get('.mainlevel-nav').eq(2)
      resto_button.should("exist").contains("Commande").click()
      //resto_button.invoke('attr', 'id').should('eq', 'active_menu-nav') 
      // the above line gives an error, probably because the DOM was refreshed.
      cy.get('.mainlevel-nav').eq(2).invoke('attr', 'id').should('eq', 'active_menu-nav') 
      cy.get('.mainlevel-nav').eq(2).should('have.attr', 'id', 'active_menu-nav')
      // there are 2 ways to check an atribute value
    })

    it('verify Commande url', () => {
      cy.get('.mainlevel-nav').eq(2).should("exist").contains("Commande").click()
      cy.url().should('contains', 'commande-plateaux-repas.html')
      cy.location("pathname").should('contains', 'commande-plateaux-repas.html') 
    })
  })

  })



  