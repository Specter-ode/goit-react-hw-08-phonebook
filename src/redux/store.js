import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-slice';
import authReducer from './auth/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
