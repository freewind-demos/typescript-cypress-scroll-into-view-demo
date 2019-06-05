describe('TypeScript', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('scroll and click on the button outside page', () => {
    cy.get('#main')
      .should('have.text', 'There is an element on the right outside the page');

    cy.get('#out')
      .scrollIntoView()
      .get('#out button')
      .click()
      .get('#main')
      .should('have.text', 'Hello from outside button');
  });

})
