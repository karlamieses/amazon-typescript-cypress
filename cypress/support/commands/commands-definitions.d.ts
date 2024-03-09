export {}

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get DOM element by the ID
             * @param id_selector 
             */
            getElementById(id_selector: string): Chainable
        }
    }
}