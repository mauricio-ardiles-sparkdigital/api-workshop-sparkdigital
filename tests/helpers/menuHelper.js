const requestSync = require('sync-request');


/**
 * Returns the menu for a given Access Code
 * @param {string} url
 * @param {string} accessCode
 * @returns {string}
 */
function getMenuByAccessCodeRequest(url, accessCode) {
    return requestSync('GET',`${url}/${accessCode}`);
}


function findAccessRight(userRight, userAccessRights) {
    const result = userAccessRights.find(function (userAccessRight) {
        return userAccessRight === userRight;
    });

    return result != null;
}

module.exports = {
    getMenuByAccessCodeRequest,
    findAccessRight,
}
