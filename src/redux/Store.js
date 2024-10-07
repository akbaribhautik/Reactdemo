import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import apiReducer from './ApiReducer';

const persistConfig = {
    key: 'root',
    storage,

};

const rootReducer = combineReducers({
    apiReducer: persistReducer(persistConfig, apiReducer)
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
