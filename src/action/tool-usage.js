export const markAsLoading = status => ({
    type: 'TOOL_USAGES/LOADING',
    isLoading: status
});

export const markAsFetchSuccess = toolUsages => ({
    type: 'TOOL_USAGES/FETCH_SUCCESS',
    toolUsages
});

export const markAsFetchError = status => ({
    type: 'TOOL_USAGES/FETCH_ERROR',
    hasError: status
});

export const fetchToolUsages = url => {
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