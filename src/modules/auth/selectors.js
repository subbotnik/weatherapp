import { createSelector } from 'reselect';

const authRootSelector = (state) => state.auth;

export const isSignedInSelector = createSelector(
  authRootSelector,
  (root) => root.isSignedIn
);
