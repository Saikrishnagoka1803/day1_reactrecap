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

        case 'ADD_THE_JOBS': {
            return {
                ...state,
                jobs: {
                    job: state.jobs.job.concat(action.payload)
                }
            }
        }
        
        default: return state
    }

}

export default MainReducer;