const { defineConfig } = require("cypress");

module.exports = defineConfig({
  scrollBehavior:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
