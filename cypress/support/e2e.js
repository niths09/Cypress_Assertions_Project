import './commands'
require('cypress-xpath')
// Ignore uncaught exceptions from the page
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})