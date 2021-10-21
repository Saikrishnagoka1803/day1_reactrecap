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

        case 'REMOVE_FROM_FAV': {
            return {
                ...state,
                favourites: {
                    ...state.favourites,
                    Fav: state.favourites.Fav.filter(e => e._id !== action.payload._id)
                }
            }
        }
        
        default: return state
    }

}

export default MainReducer;