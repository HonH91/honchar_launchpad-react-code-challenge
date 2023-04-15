
const GET_POSTAL = "GET_POSTAL";

const defaultState = {postal: []}


export const postalReducer = (state = defaultState, action) =>
{
    switch (action.type) {
        case GET_POSTAL:
            return {...state, postal: [...state.postal , ...action.payload]}
        default:
            return state
    }
}

export const getPostalInfo = (payload) => ({type: GET_POSTAL, payload})