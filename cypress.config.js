const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zvfigf',
 
  e2e: {
    recordKey: 'f477a350-d9bf-4323-b4ae-b099e3dcd633',
    
      "reporter": "mochawesome",
      
      "reporterOptions":{
                 "chats":true,
                 "overwrite":true,
                 "html":false,
                 "json":true,
                 "reportDir": "cypress/reports"
                 
                },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/*.js'
    },
});
