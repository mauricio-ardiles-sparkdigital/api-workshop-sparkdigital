const {Given} = require('cucumber');
const accessHelper = require('../helpers/accessHelper');
const testConfigurations = require('../configurations/testConf');
const commonHelper = require('../helpers/commonHelper');

Given(/^User (.*) request an access code$/, function (userName) {
    const url = testConfigurations.endPoints[commonHelper.getTestEnvironment()].urls['access'];
    //Aqui estoy usando un post no un get, porque queria mostrar que se puede enviar un json body
    const response = accessHelper.getAccessCodeRequest(url, userName);
    this.setServiceStatusCodeTo(response.statusCode);
    this.setServiceResponse(JSON.parse(response.getBody('utf-8')));
});
