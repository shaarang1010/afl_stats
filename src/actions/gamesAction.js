export const addGames = (games, type) =>{
    return (dispatch, getState) =>{
        switch (type) {
            case 'ADD_GAMES':
                dispatch({ type: 'ADD_GAMES', payload: { games }});
                break;
            default:
                break;
        }
    }
}

