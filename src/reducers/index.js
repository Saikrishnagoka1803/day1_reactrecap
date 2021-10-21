import { initialState } from "../store";

const MainReducer = (state = initialState, action) => {
    switch(action.type){

        case 'ADD_TO_FAV': {
            return {
                ...state,
               favourites: {
                   ...state.favourites,
                   Fav: state.favourites.Fav.concat(action.payload)
               }
            }
        }
        
        default: return state
    }

}

export default MainReducer;