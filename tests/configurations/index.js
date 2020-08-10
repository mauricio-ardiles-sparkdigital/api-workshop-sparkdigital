const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'tests/reports/cucumber_report.json',
    output: 'tests/reports/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        API: 'SPARKDIGITAL API E2E Workshop',
    },
};

reporter.generate(options);
