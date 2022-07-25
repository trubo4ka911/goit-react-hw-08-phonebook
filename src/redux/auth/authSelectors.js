const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getError = state => state.auth.error;

const getLoading = state => state.auth.loading;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getError,
  getLoading,
};
export default authSelectors;