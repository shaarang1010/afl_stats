export const addTips = (tips, type) =>{
    return (dispatch, getState) =>{
        switch (type) {
            case 'ADD_TIPS':
                dispatch({ type: 'ADD_TIPS', payload: { tips }});
                break;
            default:
                break;
        }
    }
}