export const loadToolUsages = (state = false, action) => {
    switch (action.type) {
        case 'TOOL_USAGES/LOADING':
            return action.isLoading;
        default:
            return state;
    }
};

export const fetchToolUsagesSuccess = (state = [], action) => {
    switch (action.type) {
        case 'TOOL_USAGES/FETCH_SUCCESS':
            return action.toolUsages;
        default:
            return state;
    }
};

export const fetchToolUsagesError = (state = false, action) => {
    switch (action.type) {
        case 'TOOL_USAGES/FETCH_ERROR':
            return action.hasError;
        default:
            return state;
    }
};
