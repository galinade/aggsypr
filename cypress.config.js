const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId:'z9xine',
  e2e: {
    baseUrl: "http://qamid.tmweb.ru/client/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
