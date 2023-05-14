/*
context("GET /users", () => {
  it("gets a list of users", () => {
    cy.request("GET", "https://dummyjson.com/products").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.results).length.to.be.greaterThan(1)
      assert.isArray(response.body, 'Todos Response is an array')
    })
  })
})


describe("Get Method", function(){
  it("Scenario 2", function(){
     cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {
     }).then((r) => {
        expect(r.status).to.eq(200)
        cy.log(r.body)
        console.log(r.body)
        expect(r).to.have.property('headers')
        expect(r).to.have.property('duration')
        expect(r).to.have.property('email')
     });
  })
})

describe("Get Method2", function(){
  it("Scenario 2", function(){
     cy.request("GET", "https://dummyjson.com/products", {
     }).then((r) => {
        expect(r.status).to.eq(200)
        //expect(r.body).to.deep.equal({discountPercentage})

        expect(r.body).to.have.property('discountPercentage', '12.96')
        //cy.log(r.body)
        //cy.log(r.body[0])
        //cy.log(r.body[1])
        //console.log(r.body)
        //console.log(r.body.data[0])
        //console.log(r.body)
        //expect(r).to.have.property('discountPercentage')

     });
  })
})

*/

it("Test1", () => {
  cy.request({
    method: "GET",
    url: "https://jsonplaceholder.cypress.io/comments",
  }).then((response) => {
    cy.log(response.status)
    cy.log(response.body[0])
    cy.log(response.body[1])
    cy.log(response.body[1].email)
    //expect(response.body).to.have.property('email')
  })
})

// https://dev.to/murillowelsi/api-testing-with-cypress-part-2-creating-your-tests-270i
it("Test2", () => {
  cy.request({
    method: "GET",
    url: "https://serverest.dev/usuarios",
  }).then((response) => {
    cy.log(response.status)
    expect(response.body.quantidade).to.eq(response.body.usuarios.length)
    expect(response.body.usuarios[0].email).to.not.be.null
    expect(response.body.usuarios[0]).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
    expect(response.body.usuarios[0].nome).to.eq("Rebecca Lloyd")

    //this is how you verify multiple keys values in a loop
    //Cypress._.each(response.body.usuarios, (usuario) => {
      //expect(usuario.email).to.not.be.null
      //expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
    //})


  })
})





