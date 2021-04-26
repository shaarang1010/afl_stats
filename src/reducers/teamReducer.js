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
                teamId: action.teamId,
                teamName: action.teamName,
                teamCrest: action.teamCrest
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
                teamId: action.teamId,
                teamName: action.teamName,
                teamCrest: action.teamCrest
            })
        default:
            break;
    }
}

export default teamReducer;