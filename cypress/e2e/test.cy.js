describe('hackaton test spec', () => {
  it('passes', () => {
    cy.visit('https://hackthefuture.bignited.be/')
    cy.wait(4000)
    cy.get('#action-button').click()
    
  })

  it.only('information',()=>{
    cy.visit('http://hackthefuture.bignited.be/information',{failOnStatusCode:false})
    cy.get('#name').type('naam')
    cy.get('#age').type('20')
    cy.get('#species').select('Reaper')
    cy.get('#planet').type('Rozemaan').type('{enter}')
    cy.wait(8000)
    cy.get('.ski-button').click()
    cy.get('img').click(200,195)
    let code
    cy.get('.murder').should(($murder) => {
      code = $murder.text()
      
    })
    cy.log(code)
  })
})