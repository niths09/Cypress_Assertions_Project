describe('DemoQA New User Registration', () => {
  
  beforeEach(() => {
    cy.visit('https://demoqa.com/login')
    cy.wait(3000)
  })

  before(() => {
    cy.log('Test started.')
  })

  //TEST CASE 1: Validate New User button
  it('Validates the New User button', () => {
    cy.xpath('//*[@id="newUser"]').should('be.visible').and('be.enabled').and('contain.text', 'New User')
  })

  //TEST CASE 2: Click New User button
  it('Clicks the New User button', () => {
    cy.newUser()
    cy.wait(5000)
  })

  //TEST CASE 3: Validate registration form elements
  it('Validates each registration form element', () => {
    cy.newUser()
    cy.wait(5000)

    cy.xpath('//*[@id="firstname"]', { timeout: 10000 }).should('be.visible').and('have.attr', 'placeholder', 'First Name')
    cy.wait(3000)

    cy.xpath('//*[@id="lastname"]', { timeout: 10000 }).should('be.visible').and('have.attr', 'placeholder', 'Last Name')
    cy.wait(3000)

    cy.xpath('//*[@id="userName"]', { timeout: 10000 }).should('be.visible').and('have.attr', 'placeholder', 'UserName')
    cy.wait(3000)

    cy.xpath('//*[@id="password"]', { timeout: 10000 }).should('be.visible').and('have.attr', 'placeholder', 'Password')
    cy.wait(3000)

    cy.xpath('//*[@id="register"]', { timeout: 10000 }).should('be.visible').and('be.enabled').and('have.attr', 'type', 'button')
    cy.wait(3000)
  })

  //TEST CASE 4: Fill registration form
  it('Registers a new user', () => {
    cy.newUser()
    cy.wait(3000)

    cy.registerUser('Priya', 'Lakshmi', 'priyalak789', 'Password@789')

    //Handle the alert after registration
    cy.on('window:alert', (message) => {
      expect(message).to.equal('User Register Successfully.')
    })

    cy.url().should('include', '/register')
    cy.wait(3000)

    cy.url().should('eq', 'https://demoqa.com/register')  
    cy.wait(3000)
  })

  //TEST CASE 5: Validate Back to Login button
  it('Validates the Back to Login button', () => {
    cy.newUser()
    cy.wait(3000)
    cy.xpath('//*[@id="gotologin"]').should('be.visible').and('be.enabled').and('have.attr', 'type', 'button')
  })

  //TEST CASE 6: Click Back to Login button
  it('Clicks the Back to Login button', () => {
    cy.newUser()
    cy.wait(3000)
    cy.backtoLoginUser()
  })

  //TEST CASE 7: Validate login form elements
  it('Validates username, password and login button', () => {
    cy.xpath('//*[@id="userName"]', { timeout: 10000 }).should('be.visible').and('have.attr', 'placeholder', 'UserName')
    cy.wait(3000)

    cy.xpath('//*[@id="password"]', { timeout: 10000 }).should('be.visible').and('have.attr', 'placeholder', 'Password')
    cy.wait(3000)

    cy.xpath('//*[@id="login"]', { timeout: 10000 }).should('be.visible').and('be.enabled').and('have.attr', 'type', 'button')
  })

  //TEST CASE 8: Login using custom commands
  it('Logs in the user', () => {
    cy.loginUser('priyalak789', 'Password@789')
    cy.wait(3000)

    cy.url().should('include', '/profile')
    cy.wait(3000)

    cy.xpath('//*[@id="submit"]').should('be.visible').and('be.enabled')
    cy.wait(3000)

    cy.contains('User Name : priyalak789').should('be.visible')
    cy.wait(3000)

    cy.title().should('eq', 'DEMOQA')
    cy.wait(3000)

    cy.url().should('eq', 'https://demoqa.com/profile')
    cy.wait(3000)
  })

  afterEach(() => {
    cy.log('Test finished.')
  })

  after(() => {
    cy.log('All tests completed.')
  })
})