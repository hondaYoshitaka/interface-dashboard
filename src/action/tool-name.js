export const markAsLoading = status => ({
    type: 'TOOL_NAMES/LOADING',
    isLoading: status
});

export const markAsFetchSuccess = toolNames => ({
    type: 'TOOL_NAMES/FETCH_SUCCESS',
    toolNames
});

export const markAsFetchError = status => ({
    type: 'TOOL_NAMES/FETCH_ERROR',
    hasError: status
});

export const fetchToolNames = url => {
    return (dispatch) => {
        dispatch(markAsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(markAsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((comments) => dispatch(markAsFetchSuccess(comments)))
            .catch(() => dispatch(markAsFetchError(true)));
    }
}