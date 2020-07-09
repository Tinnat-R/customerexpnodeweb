import {
    UNAUTHORIZED_REQUEST,
    PERMISSION_DENIED
} from '../error-constants';

export const commonResponseHandler = (response) => {
    if (response && response.error && response.error.message === PERMISSION_DENIED) {
        console.log('commonResponseHandler', `user not permitted to access this page.`);
        window.location.href = '/notfound';
    }
    if (response && response.error && response.error.message === UNAUTHORIZED_REQUEST) {
        console.log('commonResponseHandler', `user not authorized to access this page.`);
        window.location.href = '/login';
    }
    return response;
};

export const commonErrorHandler = (error) => {
    console.log('commonErrorHandler', `error received: ${JSON.stringify(error)}`);
    window.location.href = `/error?reason=${JSON.stringify(error)}`;
};