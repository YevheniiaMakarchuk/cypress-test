
export class shoppingCart {
    shoppingProcess() {

cy.url().should ('include', '/cart' )
cy.get('header').should('be.visible')
cy.get ('#main-body').should('be.visible')
cy.get ('#footer').should('be.visible')
cy.get ('.cart-btn').should('exist')
cy.get ('#cartItemCount').should('exist')
// Check that the user is not logged in 
cy.get ('.font-size-36').should('contain.text', 'Configure')
cy.get ('.secondary-cart-body').should('contain.text', 'Configure your desired options and continue to checkout.')
//cy.get('a[href="/login"]').should('exist')
// Checking breadcrumbs 
//cy.get('.cart-breadcrumb a').should('have.length.at.least', 1)
cy.get ('.cart-breadcrumb').first().should('contain.text', 'CONFIGURE')
cy.get ('.cart-divider').should('exist').should('have.length.at.least', 1)
cy.get ('.bubble').should('exist').should('have.length.at.least', 1)
cy.get ('.cart-step').eq(1).should('contain.text', 'REVIEW')
cy.get ('.cart-step').last().should('contain.text', 'CHECKOUT')
cy.get('.order-summary').should('be.visible')
//cy.get ('.product-group').first().within(() => {
   // cy.get('.float-right') // Adjust the selector to match the price element in the cart
   //     .invoke('text')
   //     .should('equal', productPrice)
//})

    }
}

export const onShopingCartPage = new shoppingCart()