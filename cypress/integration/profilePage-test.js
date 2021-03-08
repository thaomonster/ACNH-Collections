describe('App', () => {
  before(() => {
    cy.intercept('GET', 'https://acnhapi.com/v1a/villagers/72', {fixture: 'profilePageData'});
    cy.intercept('GET', 'https://acnhapi.com/v1a/villagers', {fixture: 'villagerData'});
    cy.visit('http://localhost:3000/72');
  })

  it('should have a passport container with a header and favorite button', () => {
    cy.get('h2').should('have.text', '--- PASSPORT ---');
    cy.get('.passport-container').find('img').should('have.attr', 'src', '/static/media/leaf-blue.043edc8a.png');
  })

  it('should have a profile picture', () => {
    cy.get('article').find('img').should('have.class', 'profile-picture')
  })

  it('should have a name', () => {
    cy.get('article').get('p').should('contain', 'Name')
  })

  it('should have a birthday', () => {
    cy.get('article').get('p').should('contain', 'Born')
  })

  it('should have a personality', () => {
    cy.get('article').get('p').should('contain', 'Personality')
  })

  it('should have a gender', () => {
    cy.get('article').get('span').should('have.class', 'gender')
  })

  it('should have a species', () => {
    cy.get('article').get('p').should('contain', 'Species')
  })

  it('should have a catch phrase', () => {
    cy.get('article').get('p').should('contain', 'Catch Phrase')
  })

  it('should have a quote', () => {
    cy.get('article').get('p').should('contain', 'Quote')
  })

  it('should test user integration', () => {
    cy.get('.back-button')
      .click()
      .url()
      .should('contain', '/');
    cy.contains('Murphy')
      .click()
      .url()
      .should('contain', '/72')
      .get('.profile-leaf')
      .click()
      .get('.header-leaf')
      .click()
      .url()
      .should('contain', '/')
      .get('h1')
      .click()
      .url()
      .should('contain', '/');
  })
})