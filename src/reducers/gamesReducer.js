const initState = {
    teamGames: [],
    teamTips: []
}

const gamesReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'ADD_GAMES':
            return{
                ...state,
                teamGames: action.payload.games
            }
        case 'ADD_TIPS':
            return{
                ...state,
                teamTips: action.payload.tips
            }    
        default:
            break;
    }
}

export default gamesReducer;