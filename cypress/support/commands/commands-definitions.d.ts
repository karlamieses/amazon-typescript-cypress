export {}

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Get DOM element by the ID
             * @param id_selector 
             */
            getElementById(id_selector: string): Chainable
            /**
             * Get DOM element by the data-component
             * @param id_selector 
             * @example [data-component-type="s-search-result"]
             */
            getByDataComponent(data_component: string): Chainable
            
        }
    }
}