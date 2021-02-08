export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQC1YNbgMIzkjm5PsCqACIAZwJ90cAVjFN8jqKMv3VxbWpKg34_T6sKf5AyT4KWcXybE4MOyPofifsU0_rOX6rcV4vNG4c63gFVkOrvq-MHbtRzm2AY2YAo-PQ0g5RwlQkmAOtTDLNpRwYEcP48Kzq4o-yuTG62WqlN95nTzm3cRx3njRMcW"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
};

export default reducer;