import { TopNavigationSearch } from "@locators/top_navigation_locators"

describe("Search Product", () => {

    before(() => {
        cy.visit(Cypress.env("baseUrl"))
    })

    it("should validate the user can search for a product and land on the product list", () => {
        cy.getElementById(TopNavigationSearch.SearchBar).type("How Google Test Software{Enter}")
        cy.url().should("include", "s?k=How+Google+Test+Software")
        cy.getByDataComponent(TopNavigationSearch.SearchResultComponent).its("length").should("be.greaterThan", 1)
    })
})