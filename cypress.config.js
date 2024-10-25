const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://store.cpanel.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
