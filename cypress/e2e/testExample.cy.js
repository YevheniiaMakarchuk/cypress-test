/// <reference types="cypress" />
import { onStorePageScreen } from "../support/pageObjects/01storePage";
import { onShopingCartPage } from "../support/pageObjects/checkoutPage";



describe ('Checkout on the test', ()=> {
    let productPrice
    it ('Complete checkout', () => {
        onStorePageScreen.storeProcess()
        onShopingCartPage.shoppingProcess()
        


    })


})