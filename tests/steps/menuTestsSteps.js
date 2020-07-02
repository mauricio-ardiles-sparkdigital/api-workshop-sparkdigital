const {When} = require('cucumber');
const menuHelper = require('../helpers/menuHelper');
const testConfigurations = require('../configurations/testConf');
const commonHelper = require('../helpers/commonHelper');
const {Then} = require('cucumber');
const { assert } = require('chai');

When(/^User goes to the menu using its access code$/, function () {
    console.log(`Environment: ${commonHelper.getTestEnvironment()}`);
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

Then(/^The menu includes only VOD for the user's access right$/, function () {
    const userRights = this.getServiceResponse().access_rights;
    const vodGenreResponse = this.getServiceResponse().vod_genre;
    const result = menuHelper.checkMenuVodQuality(userRights, vodGenreResponse)
    assert.isTrue(result.status, result.messages);
});
