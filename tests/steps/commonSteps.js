/* eslint-disable new-cap */
const { Then } = require('cucumber');
const { assert } = require('chai');


Then(/^The status code is (\d+)$/, function (status) {
  assert.equal(this.getServiceStatusCode(), status, 'Wrong Status Code');
});
