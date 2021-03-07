describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Should see a header, form and favorite button on page load', () => {
    cy.get('header h1').should('have.text', 'ACHN Collections');
    cy.get('header img').should('have.src', '../../assets/leaf-green.png');
    cy.get('form').and('be.visible');
  });
})