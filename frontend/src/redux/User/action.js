import * as actionTypes from './action-types';

export const userLogin = ({ user, token }) => {
  return {
    type: actionTypes.LOGIN,
    payload: { user, token },
  };
};
