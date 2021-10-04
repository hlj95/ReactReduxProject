
const initialState = {
    goals:[]
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case 'ALL_GOALS':
            return {
                ...state,
                goals: action.payload
            }

            default:
                return state
    }
}

export default reducer