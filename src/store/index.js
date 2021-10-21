import { createStore, applyMiddleware, compose } from "redux";
import MainReducer from "../reducers"
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    favourites: {
        Fav: []
    },
    jobs: {
        job: []
    }
}

const configureStore = createStore(
    MainReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default configureStore;