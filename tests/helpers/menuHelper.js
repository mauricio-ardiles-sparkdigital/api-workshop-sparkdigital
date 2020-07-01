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


/**
 * Checks if a given quality is includes in the user access rights
 * @param qualityRight
 * @param userAccessRights
 * @returns {boolean}
 */
function findAccessRight(qualityRight, userAccessRights) {
    const result = userAccessRights.find(function (userAccessRight) {
        return userAccessRight === qualityRight;
    });

    return result != null;
}


/**
 * Checks if a given array of VODs have the right quality for user access rights
 * @param userRights
 * @param vod_genre
 * @returns {{messages: [], status: boolean}}
 */
function checkMenuVodQuality(userRights, vod_genre) {
    let failedArray = [];
    vod_genre.forEach(function (vodGenre) {
        vodGenre.vods.forEach(function (vod) {
            const result = findAccessRight(vod.quality, userRights);
            if (!result) {
                failedArray.push( `Genre ${vodGenre.genre} , VOD ${vod.title} has an unsupported Quality ${vod.quality}`);
            }
        });
    });
    return {'status':failedArray.length === 0, 'messages' : failedArray};
}

module.exports = {
    getMenuByAccessCodeRequest,
    findAccessRight,
    checkMenuVodQuality,
}
