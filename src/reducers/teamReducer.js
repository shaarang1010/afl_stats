const initState = {
    teamId: null,
    teamName: null,
    teamCrest: null
}

const teamReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'ADD_TEAM':
            return({
                ...state,
                teamId: action.payload.id,
                teamName: action.payload.name,
                teamCrest: action.payload.logo
            })
        case 'DELETE_TEAM':
            return({
                ...state,
                teamId: null,
                teamName: null,
                teamCrest: null
            })
        case 'UPDATE_TEAM':
            return({
                ...state,
                teamId: action.payload.id,
                teamName: action.payload.name,
                teamCrest: action.payload.logo
            })
        default:
            break;
    }
    return state;
}

export default teamReducer;