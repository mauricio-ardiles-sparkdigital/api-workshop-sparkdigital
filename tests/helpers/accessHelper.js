const requestSync = require('sync-request');

/**
 * Returns an access code for a given User
 * Aqui estoy usando un post no un get, porque queria mostrar que se puede enviar un json body
 * @param {string} url
 * @param {string} userName
 * @returns {string}
 */
function getAccessCodeRequest(url, userName) {
    const params = {
        'name': userName
    };
    const bodyParams = JSON.stringify(params);

    return requestSync('POST',url,{
        headers: {
            'Content-Type': 'application/json'
        },
        body: bodyParams,
    });
}

module.exports = {
    getAccessCodeRequest,
};
