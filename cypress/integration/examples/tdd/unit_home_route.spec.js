/* eslint-disable no-undef */

// Testing the home page route - TDD unit

//   for instance access the home page user stories would be
//    1. visit home page URL
//    2. Query for the head title hoepage or the main header
//    3. Interact with the logo Image
//    4. The home page should then re-load

describe('The Home Page', () => {
    it('should visit the home page and check its url and head title tag', () => {
      // eslint-disable-next-line no-undef
      cy.visit('http://localhost:8080/')
  
      // Should be on a new URL which includes '/'
      // eslint-disable-next-line no-undef
      cy.url().should('include', '/')
  
      // Page title should be Home Page
      cy.get('title')
        // eslint-disable-next-line padded-blocks
        .should('have.text', 'responsive-ui-tester-tool')
    })
  })
  