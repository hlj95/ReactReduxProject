

export const fetchGoals = () => {
        return (dispatch) => {
        fetch('https://sheltered-hamlet-06411.herokuapp.com/api/goals')
        .then(response => response.json())
        .then(goals => {
            dispatch({type:'ALL_GOALS', payload: goals})
        })
    }

}
