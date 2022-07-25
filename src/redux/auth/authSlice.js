import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [authOperations.register.fulfilled](state, { payload }) {
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    },
    [authOperations.register.rejected](state, { payload }) {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
    [authOperations.logIn.pending](state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
        isLoggedIn: true,
      };
    },
    [authOperations.logIn.rejected](state, { payload }) {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
    [authOperations.logOut.pending](state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [authOperations.logOut.fulfilled](state, { payload }) {
      return {
        ...state,
        loading: false,
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
      };
    },
    [authOperations.logOut.rejected](state, { payload }) {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    },
    [authOperations.fetchCurrentUser.pending](state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      return {
        ...state,
        loading: false,
        user: payload,
        isLoggedIn: true,
      };
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      return {
        ...state,
        loading: false,
      };
    },
  },
});

export default authSlice.reducer;