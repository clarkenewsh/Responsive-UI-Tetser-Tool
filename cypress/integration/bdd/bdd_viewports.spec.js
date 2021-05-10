/* eslint-disable no-undef */
// Testing the home page route - BDD

//   for instance access the home page user stories would be
//    1. visit home page URL
//    2. Query for the head tag and then the page title 
//    3. Get each of the iframe tags 
//    4. Set the viewport size for each iframe
//    5. Check each viewport size and dimension should equla all the viewport resolution variotion 
//    5.1 Viewport should equal - (375 x 667 (Mobile), 411 x 823 (Larger Mobile), 1024 x 768 (Tablet), 280 x 800 (Laptop Small), 1680 x 1050 (Desktop)


// /// <reference types="cypress" />

// context('Viewport', () => {
//     beforeEach(() => {
//       cy.visit('https://example.cypress.io/commands/viewport')
//     })
  
//     it('cy.viewport() - set the viewport size and dimension', () => {
//       // https://on.cypress.io/viewport
  
//       cy.get('#navbar').should('be.visible')
//       cy.viewport(320, 480)
  
//       // the navbar should have collapse since our screen is smaller
//       cy.get('#navbar').should('not.be.visible')
//       cy.get('.navbar-toggle').should('be.visible').click()
//       cy.get('.nav').find('a').should('be.visible')
  
//       // lets see what our app looks like on a super large screen
//       cy.viewport(2999, 2999)
  
//       // cy.viewport() accepts a set of preset sizes
//       // to easily set the screen to a device's width and height
  
//       // We added a cy.wait() between each viewport change so you can see
//       // the change otherwise it is a little too fast to see :)
  
//       cy.viewport('macbook-15')
//       cy.wait(200)
//       cy.viewport('macbook-13')
//       cy.wait(200)
//       cy.viewport('macbook-11')
//       cy.wait(200)
//       cy.viewport('ipad-2')
//       cy.wait(200)
//       cy.viewport('ipad-mini')
//       cy.wait(200)
//       cy.viewport('iphone-6+')
//       cy.wait(200)
//       cy.viewport('iphone-6')
//       cy.wait(200)
//       cy.viewport('iphone-5')
//       cy.wait(200)
//       cy.viewport('iphone-4')
//       cy.wait(200)
//       cy.viewport('iphone-3')
//       cy.wait(200)
  
//       // cy.viewport() accepts an orientation for all presets
//       // the default orientation is 'portrait'
//       cy.viewport('ipad-2', 'portrait')
//       cy.wait(200)
//       cy.viewport('iphone-4', 'landscape')
//       cy.wait(200)
  
//       // The viewport will be reset back to the default dimensions
//       // in between tests (the  default can be set in cypress.json)
//     })
//   })
  

describe('Viewports', () => {
    it('should check each iframe viewport iframe size and dismension', () => {
      // eslint-disable-next-line no-undef
      cy.visit('http://localhost:8080/')
  
      // Should be on a new URL which includes '/'
      // eslint-disable-next-line no-undef
      cy.url().should('include', '/')
  
      // Page title should be Home Page
      cy.get('title')
        // eslint-disable-next-line padded-blocks
        .should('have.text', 'responsive-ui-tester-tool')
  
      // Save screenshot of test result to screenshots folder
      cy.screenshot()
    })
  })