let initialState = {
    toolUsages: [],
    isLoading: false,
    hasError: false,
};

export const searchToolUsages = (state = initialState, action) => {
    switch (action.type) {
        case 'TOOL_USAGES/LOADING':
            return Object.assign(state, {
                isLoading: action.isLoading,
            });
        case 'TOOL_USAGES/FETCH_SUCCESS':
            return Object.assign(state, {
                isLoading: action.isLoading,
                toolUsages: action.toolUsages,
            });
        case 'TOOL_USAGES/FETCH_ERROR':
            return Object.assign(state, {
                hasError: action.hasError,
            });
        default:
            return state;
    }
};

