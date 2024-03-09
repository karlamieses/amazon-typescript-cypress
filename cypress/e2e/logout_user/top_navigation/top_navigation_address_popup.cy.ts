import {TopNavigationsAddress} from "../../../support/locators/top_navigation_locators"


describe("Logout users: Address Popup", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("baseUrl"))
        cy.viewport('macbook-16')
        cy.getElementById(TopNavigationsAddress.Logo).click()
        cy.getElementById(TopNavigationsAddress.Address).click()
    })


    it("should validate the user is taken to the login page when clicking on 'sign in to see your addresses'", () => {
        cy.getElementById(TopNavigationsAddress.SigninToSeeYourAddress).click()
        cy.url().should('include', 'ap/signin?openid')
    })

    it("should check error message 'Please enter a valid US zip code' when clicking the 'Apply' button with no zip code", () => {
        cy.getElementById(TopNavigationsAddress.ApplyZipCodeButton).click()
        cy.contains('Please enter a valid US zip code').should('be.visible')
    })
})