config = require('config')
module.exports = {
    "verbose": true,
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report",
            "outputPath": "./reports/api-automation-execution-report.html",
            "includeFailureMsg": "true",
            "includeConsoleLog": "true",
            "dateFormat": "dd-mm-yyyy HH:MM:ss"
        }],
    ],
    "testPathIgnorePatterns":[
      "fixtures"
    ],
    "globals": {
      "ENV": config.get("app.baseurl"),
      "APIKEY": process.env.APIKEY
    }
}
