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
    let item
    cy.window().then((window) => {
      item = window.localStorage.getItem('code');
      cy.log(item);
      cy.get('body').click(50, 50);
    cy.get('.ski-button').click()
    cy.get('.ski-button').click()
    cy.get('#numpad').click()
    const digits=item.split('')
    digits.forEach(digit => {
      cy.wait(1000)
      cy.get(`#${digit}`).click()});
      cy.wait(1000)
    });
      cy.get('#enter').click()
      cy.wait(4000)
      cy.get('body').type('{upArrow}')
      cy.get('body').type('{upArrow}')
  })
  
})