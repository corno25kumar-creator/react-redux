import {createStore,applyMiddleware} from 'redux'
import  { thunk } from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer/rootReducer";


const pristConfig = {
    key:"root",
    storage,
    whitelist: ["favoritesState"],


}

const persistedReducer  = persistReducer(pristConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store);

export {persistor, store } ;
