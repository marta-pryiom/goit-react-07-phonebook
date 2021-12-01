import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { items, filter, error } from './contacts/reducers';
import {
    // persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';

const rootReducer = combineReducers({ items, filter, error });

export const store = configureStore({
    reducer: {
        contacts: rootReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(logger),
});
export default store;
