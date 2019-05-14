describe('TypeScript', () => {

  beforeEach(() => {
    cy.visit('http://localhost:26537/index.html');
  });

  it('should use find to find elements based on previous element', () => {
    cy.get('.main')
      .find('.panel')
      .should('not.contain', 'Header');
  })

  it.only('should find multiple nested element in some way', () => {
    cy.get('.main').as('main');
    cy.get('@main').find('.panel1').should('have.text', 'Panel1');
    cy.get('@main').find('.panel2').should('contain', 'Panel2');
  })

})
