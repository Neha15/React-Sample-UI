import * as actionTypes from './actionTypes';

export const getUserDetails = (user) => {
    return {
        type: actionTypes.USER_DETAILS,
        user: user
    }
}