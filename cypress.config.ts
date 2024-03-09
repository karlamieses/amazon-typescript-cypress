import { defineConfig } from "cypress";

export default defineConfig({
  env:{
    baseUrl: "https://www.amazon.com/ref=nav_logo",
    setTimeout: 5000,
    watchForFileChanges: false, 
    numTestsKeptInMemory: 60,
    pageLoadTimeout:8000,
    blockHost: [
      '*/events/com.amazon.csm.csa.prod'
    ]
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
