export const loadToolNames = (state = false, action) => {
    switch (action.type) {
        case 'TOOL_NAMES/LOADING':
            return action.isLoading;
        default:
            return state;
    }
};

export const fetchToolNamesSuccess = (state = [], action) => {
    switch (action.type) {
        case 'TOOL_NAMES/FETCH_SUCCESS':
            return action.toolNames;
        default:
            return state;
    }
};

export const fetchToolNamesError = (state = false, action) => {
    switch (action.type) {
        case 'TOOL_NAMES/FETCH_ERROR':
            return action.hasError;
        default:
            return state;
    }
};
