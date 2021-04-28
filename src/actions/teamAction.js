export const teamAction = (team, type) =>{
    return (dispatch, getState) =>{
        switch (type) {
            case 'ADD_TEAM':
                dispatch({ type: 'ADD_TEAM', payload: { team }});
                break;
            case 'DELETE_TEAM':
                dispatch({ type: 'DELETE_TEAM', payload: {} });
                break;
            case 'UPDATE_TEAM':
                dispatch({ type: 'UPDATE_TEAM', payload: { team }});
                break;
            default:
                break;
        }
    }
}

