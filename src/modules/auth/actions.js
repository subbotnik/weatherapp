export const types = {
  SIGN_IN: {
    REQUEST: 'SIGN_IN.REQUEST',
    SUCCESS: 'SIGN_IN.SUCCESS',
    FAILURE: 'SIGN_IN.FAILURE',
  },
  SIGN_OUT: {
    REQUEST: 'SIGN_OUT.REQUEST',
    SUCCESS: 'SIGN_OUT.SUCCESS',
    FAILURE: 'SIGN_OUT.FAILURE',
  },
};

export const signIn = {
  request: () => ({ type: types.SIGN_IN.REQUEST }),
  success: (response) => ({ type: types.SIGN_IN.SUCCESS }),
  failure: (error: Error) => ({ type: types.SIGN_IN.FAILURE }),
};
export const signOut = {
  request: () => ({ type: types.SIGN_OUT.REQUEST }),
  success: (response) => ({ type: types.SIGN_OUT.SUCCESS }),
  failure: (error: Error) => ({ type: types.SIGN_OUT.FAILURE }),
};
