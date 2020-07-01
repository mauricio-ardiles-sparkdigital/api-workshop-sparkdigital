const {When} = require('cucumber');
const testConfigurations = require('../configurations/testConf');
const commonHelper = require('../helpers/commonHelper');
const pingHelper = require('../helpers/pingHelper');
const {Then} = require('cucumber');
const { assert } = require('chai');


When(/^a ping request is sent$/, function () {
    const url = testConfigurations.endPoints[commonHelper.getTestEnvironment()].urls['ping'];
    const response = pingHelper.getPingRequest(url);
    this.setServiceStatusCodeTo(response.statusCode);
    this.setServiceResponse(JSON.parse(response.getBody('utf-8')));
});

Then(/^The ping response message is "(.*)"$/, function (message) {
    assert.equal(this.getServiceResponse().message, message, 'Wrong Ping Message');
});
