
const ADD_TO_FAV = 'ADD_TO_FAV'
const REMOVE_FROM_FAV ="REMOVE_FROM_FAV"
const ADD_THE_JOBS = 'ADD_THE_JOBS'

export const Addjobtofavourites = (job) => ({

    type:  ADD_TO_FAV,
    payload: job
})

export const removejobfromfavourites = (job) => ({
    type: REMOVE_FROM_FAV,
    payload: job
})

export const goingtogetjobsfromaction = (queryvar, queryvartwo) => {
    return async(dispatch) => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?${queryvar}=${queryvartwo}`)

            if (response.ok) {
                const jobsinjson = await response.json()
                //setjobs(convertedtojson.data.slice(0, 15))
                dispatch({
                    type: ADD_THE_JOBS,
                    payload: jobsinjson.data.slice(0,25)
                })

            }
        } catch (error) {
            console.log(error)
        }
    }
}