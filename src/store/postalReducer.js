const defaultState = {postal: []}

export const postalReducer = (state = defaultState, action) =>
{
    switch (action, type) {
        case "GET_POSTAL":
            return {...state, poastal: state.postal + action.payload}
            default:
                return state
    }
}