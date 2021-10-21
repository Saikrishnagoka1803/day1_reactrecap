
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

export const goingtoactions = () => {
    return async() => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?${queryvar}=${query}`)

            if (response.ok) {
                const convertedtojson = await response.json()
                setjobs(convertedtojson.data.slice(0, 15))

            }
        } catch (error) {
            console.log(error)
        }
    }
}