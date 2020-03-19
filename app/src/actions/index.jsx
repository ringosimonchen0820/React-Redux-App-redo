import axios from 'axios';


export const FETCHING_FACT_START = 'FETCHING_FACT_START';
export const FETCHING_FACT_SUCCESS = 'FETCHING_FACT_SUCCESS';
export const FETCHING_FACT_FAILURE = 'FETCHING_FACT_FAILURE';

export const fetchFact = () => dispatch => {
dispatch({ type: FETCHING_FACT_START });
    axios
        .get('https://catfact.ninja/fact')
        .then(response => {
            console.log("this is response", response)
            dispatch({ type: FETCHING_FACT_SUCCESS, payload: response.data});
        })
        .catch(error=> {
            dispatch({ type: FETCHING_FACT_FAILURE, payload: error.response})
        })
}