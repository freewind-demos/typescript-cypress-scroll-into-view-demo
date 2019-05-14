describe('TypeScript', () => {

  it('test title in header', () => {
    cy.visit('https://example.cypress.io/')

    const container = cy.get('.banner').get('.container');

    container.get('h1').should('have.text', 'Kitchen Sink');
    container.get('p').should('contain', 'This is an example app used to showcase');

  })

})
