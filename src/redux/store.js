import { configureStore } from "@reduxjs/toolkit";
import filterReducer, { contactApi } from "./contacts/contactsSlice";
import authReducer from "./auth/authSlice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactApi.middleware,
];

// const store = configureStore({
//   reducer: {
//     filter: filterReducer,
//     [contactApi.reducerPath]: contactApi.reducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// export default store;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactApi.reducerPath]: contactApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware,
});

export const persistor = persistStore(store);