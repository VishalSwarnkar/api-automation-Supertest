config = require('config')
module.exports = {
    "verbose": true,
    "roots":["./spec_tests/"],
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report",
            "outputPath": "./reports/test-report.html",
            "includeFailureMsg": "true",
            "includeConsoleLog": "true",
            "dateFormat": "dd-mm-yyyy HH:MM:ss"
        }],
    ],
    "testPathIgnorePatterns":[
      "fixtures"
    ],
    "globals": {
      "ENV": config.get("app.baseurl")
    }
}
