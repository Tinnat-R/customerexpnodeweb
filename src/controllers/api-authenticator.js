const { API_AUTHENTICATOR } = require('../lib/constants/logging-constants');
const { ADMIN_USER, ADMIN_USER_KEY } = require('../lib/constants');

const apiAuthenticator = (req, res, next) => {
    console.log(API_AUTHENTICATOR, `Authenticating API request: ${req.method}: ${req.url}`);
    const securityContext = JSON.parse(req.headers && req.headers['x-tinnat-security-context'] || '{}');
    console.log(API_AUTHENTICATOR, `Request received from user: ${securityContext.userId}`);
    if (securityContext.userId === ADMIN_USER && securityContext.key === ADMIN_USER_KEY) {
        console.log(API_AUTHENTICATOR, `Authorized user: ${securityContext.userId}`);
        return next();
    }
    console.log(API_AUTHENTICATOR, `User not authorized: ${securityContext.userId}`);
    return res.status(401).send({
        error: {
            message: 'UNAUTHORIZED REQUEST',
            description: 'You don\'t have permission to access this resource.'
        }
    })
};

module.exports = apiAuthenticator;