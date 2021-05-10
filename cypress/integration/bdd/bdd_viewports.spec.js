/* eslint-disable no-undef */

// Feature: Viewport resolutions

// User Story: As a user, I want to be able to check my website is responsive and scales in various viewport resoluton correctly
// scenario: Contact business by email
// Given I want check my website in various viewport resolutions
// When I click the button to display the website in the viewport
// Then the website is displayed in the viewport width and scales correctly


// // BDD Test Case Logic: Contact CTA Feature (email & phone) containing all the user stories scnarios (deatiled above)

// 1. visit home page URL - http://localhost:3000/
// 2. Grab the browser URL, ensure it includes /
// 3. Get each of the iframe html tags with id '#mobile', '#large-mobile', 'tablet', '#laptop-small', '#desktop'
// 4. Ensure the iframe is visible on the interface


  

describe('Viewport Resolutions', () => {
    it('should check each iframe viewport iframe size and dimension', () => {
      // eslint-disable-next-line no-undef
      cy.visit('http://localhost:8080/')
  
      // Should be on a new URL which includes '/'
      // eslint-disable-next-line no-undef
      cy.url().should('include', '/')
  
      // Page title should be Home Page
      cy.get('title')
        // eslint-disable-next-line padded-blocks
        .should('have.text', 'responsive-ui-tester-tool')
        
      cy.get('iframe#mobile')
      .should('be.visible')
       
      cy.get('iframe#large-mobile')
      .should('be.visible')

      cy.get('iframe#tablet')
      .should('be.visible')

      cy.get('iframe#laptop-small')
      .should('be.visible')

      cy.get('iframe#desktop')
      .should('be.visible')

    })
  })