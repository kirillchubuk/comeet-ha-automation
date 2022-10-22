import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.ebay.com/',
    numTestsKeptInMemory: 20, 
    watchForFileChanges: false
  },
});
