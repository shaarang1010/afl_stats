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
                teamId: action.payload.team.teamId,
                teamName: action.payload.team.teamName,
                teamCrest: action.payload.team.teamCrest
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
                teamId: action.payload.team.teamId,
                teamName: action.payload.team.teamName,
                teamCrest: action.payload.team.teamCrest
            })
        default:
            break;
    }
}

export default teamReducer;