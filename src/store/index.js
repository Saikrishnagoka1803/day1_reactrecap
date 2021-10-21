import { createStore } from "redux";
import MainReducer from "../reducers"


export const initialState = {
    favourites: {
        Fav: []
    }
}

const configureStore = createStore(
    MainReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore;