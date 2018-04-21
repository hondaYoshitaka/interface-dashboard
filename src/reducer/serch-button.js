let initialState = {
    from: "",
    to: "",
    toolNames: [],
    isSearching: false,
};

export const clickSearch = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SEARCH_BUTTON/SEARCHING':
            return {isSearching: true};
        default:
            return state;
    }
};
