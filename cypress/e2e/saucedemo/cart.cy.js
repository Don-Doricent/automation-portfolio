describe('Add item to cart', () => {
    it('does item get added?', () => {
    
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="shopping-cart-badge"]').click()
    })
});
