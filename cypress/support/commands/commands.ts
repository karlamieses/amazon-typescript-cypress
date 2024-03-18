/// <reference types="cypress" />
// ***********************************************

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("getElementById", (id_selector: string) => {
    cy.get(`#${id_selector}`)
})

Cypress.Commands.add("getByDataComponent", (data_component: string) => {
    cy.get(`[data-component-type="${data_component}"]`)
})