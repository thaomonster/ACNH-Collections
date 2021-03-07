describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should see a header, form and favorite button on page load', () => {
    cy.get('header h1').should('have.text', 'ACNH Collections');
    cy.get('form').find('img').should('have.attr', 'src', '/static/media/leaf-green.93f7536c.png');
    cy.get('form').and('be.visible');
  })

  it('should show each villager card with a thumbnail image and name', () => {
    cy.get('article').find('img').should('have.attr', 'src', '')
  })
})