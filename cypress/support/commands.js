Cypress.Commands.add('newUser', () => {
    cy.xpath('//*[@id="newUser"]', { timeout: 10000 }).click()
})

Cypress.Commands.add('registerUser', (firstName,lastName, username, password) => {
    cy.xpath('//*[@id="firstname"]', { timeout: 10000 }).clear().type(firstName)
    cy.wait(3000)
    cy.xpath('//*[@id="lastname"]', { timeout: 10000 }).clear().type(lastName)
    cy.wait(3000)
    cy.xpath('//*[@id="userName"]', { timeout: 10000 }).clear().type(username)
    cy.wait(3000)
    cy.xpath('//*[@id="password"]', { timeout: 10000 }).clear().type(password)
    cy.wait(3000)
    cy.pause() //Pause is given for the manual CAPTCHA to be done
    cy.xpath('//*[@id="register"]', { timeout: 10000 }).click()
    cy.wait(3000)
})

Cypress.Commands.add('backtoLoginUser', () => {
    cy.xpath('//*[@id="gotologin"]', { timeout: 10000 }).click()
})

Cypress.Commands.add('loginUser', (username,password) => {
    cy.xpath('//*[@id="userName"]', { timeout: 10000 }).clear().type(username)
    cy.wait(3000)
    cy.xpath('//*[@id="password"]', { timeout: 10000 }).clear().type(password)
    cy.wait(3000)
    cy.xpath('//*[@id="login"]', { timeout: 10000 }).click()
    cy.wait(3000)
})

