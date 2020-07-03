const uniqid = require('uniqid');
const args = require('yargs').argv;
const errorConstants = require('../lib/constants/error-constants');
const {
    API_AUTHENTICATOR
} = require('../lib/constants/logging-constants');
const {
    ENVIRONMENT_PRODUCTION
} = require('../lib/constants');
const environment = args.env || ENVIRONMENT_PRODUCTION;
const WOWO_DEV_INJECT_TEST_USER = args.WOWO_DEV_INJECT_TEST_USER || false;

const apiAuthenticator = async (req, res, next) => {
    console.log(API_AUTHENTICATOR, `authenticating API request: ${req.method}: ${req.url}`);
    const session = req && req.session;
    console.log(API_AUTHENTICATOR, `session: ${JSON.stringify(session)}`);
    if (session && session.sessionId) {
        console.log(API_AUTHENTICATOR, `api request authenticated with session`);
        req.user = session.user;
        return next();
    }
    console.log(API_AUTHENTICATOR, `WOWO_DEV_INJECT_TEST_USER:${WOWO_DEV_INJECT_TEST_USER}`);
    if (environment !== ENVIRONMENT_PRODUCTION && WOWO_DEV_INJECT_TEST_USER === true) {
        console.log(API_AUTHENTICATOR, `[development only] GET and POST authorized`);
        req.user = {
            name: 'TEST TEST',
            email: 'hemanthprasathmurali@gmail.com',
            accountType: 'ADMIN',
            authenticationParty: 'FACEBOOK',
            accountId: '123456789'
        };
        req.session.user = req.user;
        req.session.sessionId = uniqid('SESSION-').toUpperCase();
        req.session.startTime = new Date().getTime();
        return next();
    }
    console.log(API_AUTHENTICATOR, `user not authorized`);
    return res.status(401).send({
        error: {
            ...errorConstants.UNAUTHORIZED_REQUEST
        }
    });
};

module.exports = apiAuthenticator;