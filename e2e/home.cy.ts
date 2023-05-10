describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // to only execute this test use "it.only(....."
  it('the h1 containg the correct text', () => {
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })

  it('the features on the homepage are correct', () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })
  
})