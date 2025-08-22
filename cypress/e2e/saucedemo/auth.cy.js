describe('Valid Login Attempt', () => {
    it('check credentials', () => {
    
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    })
});

describe('Invalid Login Attempt', () => {
    it('check credentials', () => {
       cy.visit('https://www.saucedemo.com/') 
        cy.get('[data-test="username"]').type('standard_user1')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
})