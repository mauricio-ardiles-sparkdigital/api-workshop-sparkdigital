const {When} = require('cucumber');
const menuHelper = require('../helpers/menuHelper');
const testConfigurations = require('../configurations/testConf');
const commonHelper = require('../helpers/commonHelper');
const {Then} = require('cucumber');
const { assert } = require('chai');

When(/^User goes to the menu using its access code$/, function () {
    const accessCode = this.getServiceResponse().access_code;
    const url = testConfigurations.endPoints[commonHelper.getTestEnvironment()].urls['menu'];
    const response = menuHelper.getMenuByAccessCodeRequest(url, accessCode);
    this.setServiceStatusCodeTo(response.statusCode);
    this.setServiceResponse(JSON.parse(response.getBody('utf-8')));
});

Then(/^Its vod access rights are (.*)$/, function (accessRights) {
    const accessRightsArray = accessRights.split(",");
    const responseAccessRights = this.getServiceResponse().access_rights;
    accessRightsArray.forEach(function (accessRight) {
        const hasRight = menuHelper.findAccessRight(accessRight, responseAccessRights);
        assert.isTrue(hasRight, `Missing Access Right ${accessRight}`);
    });
});
