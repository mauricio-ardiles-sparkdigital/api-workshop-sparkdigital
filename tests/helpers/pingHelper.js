const requestSync = require('sync-request');


/**
 * Look for an specific actionPlatform
 * @param {string} url
 * @returns {string}
 */
function getPingRequest(url) {
    return requestSync('GET', url);
}

module.exports = {
    getPingRequest,
}
