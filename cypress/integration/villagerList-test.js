describe('App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://acnhapi.com/v1a/villagers', {fixture: 'villagerData'});
    cy.intercept('GET', 'https://acnhapi.com/v1a/villagers/72', {fixture: 'profilePageData'});  
    cy.visit('http://localhost:3000');
  })
  
  it('should see a header, form and favorite button on page load', () => {
    cy.get('header h1').should('have.text', 'ACNH Collections');
    cy.get('form').find('img').should('have.class', 'header-leaf');
    cy.get('form').and('be.visible');
  })

  it('should show each villager card with a thumbnail image and name', () => {
    cy.get('div').should('have.class', 'thumbnail-img');
    cy.get('p');
  })

  it('should to test user integration on home page', () => {
    cy.get('input')
      .type('Murphy')
      .get('.thumbnail-img')
      .click()
      .url()
      .should('contain', '/72')
      .get('.back-button')
      .click()
      .url()
      .should('contain', '/');
  })
})