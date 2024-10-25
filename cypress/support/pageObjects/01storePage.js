export class storePage {

    storeProcess() {
        let productPrice
        cy.visit ('/cart.php?a=confproduct&i=0')
        //Wait for a network request that indicates the page has loaded
        //cy.intercept('GET', '**/store/cpanel-licenses').as('licensesPage')
        //cy.wait('@licensesPage')
        //Checking main elements on the page 
        cy.get('header').should('be.visible')
        cy.get ('.mr-3').should('exist')
        cy.get ('.cart-btn').should('exist')
        cy.get ('#cartItemCount').should('exist')
        // Check that the user is not logged in 
        cy.get ('.font-size-36').should('contain.text', 'cPanel Licenses')
        //cy.get('a[href="/login"]').should('exist')
        // Checking breadcrumbs 
        //cy.get('.cart-breadcrumb a').should('have.length.at.least', 1)
        cy.get ('.cart-breadcrumb').first().should('contain.text', 'CONFIGURE')
        cy.get ('.cart-divider').should('exist').should('have.length.at.least', 1)
        cy.get ('.bubble').should('exist').should('have.length.at.least', 1)
        cy.get ('.cart-step').eq(1).should('contain.text', 'REVIEW')
        cy.get ('.cart-step').last().should('contain.text', 'CHECKOUT')
        //Adding product to the cart 
        cy.get('.col-md-6').first().should('exist')
        //cy.get ('#product3-name').as('@productName')
        cy.get ('#product3-description').should('exist')
        cy.get('.clearfix').first().within(() => {
        cy.get('.product-pricing') // Adjust the selector to match your price element
                .invoke('text')
                .then((priceText) => {
                    // Clean the price string if necessary (e.g., removing currency symbols)
                    productPrice = priceText.trim();
                })
            })
        //cy.get ('#product3-price').as('@productPrice')
        cy.get ('#product3-order-button').click()
        


    }
}

export const onStorePageScreen = new storePage()