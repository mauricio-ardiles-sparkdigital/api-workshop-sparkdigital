const {When} = require('cucumber');
const testConfigurations = require('../configurations/testConf');
const commonHelper = require('../helpers/commonHelper');
const pingHelper = require('../helpers/pingHelper');


When(/^a ping request is sent$/, function () {
    const url = testConfigurations.endPoints[commonHelper.getTestEnvironment()].urls['ping'];
    const response = pingHelper.getPingRequest(url);
    this.setServiceStatusCodeTo(response.statusCode);
    this.setServiceResponse(JSON.parse(response.getBody('utf-8')));
});
