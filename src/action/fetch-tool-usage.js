export const markAsLoading = status => ({
    type: 'TOOL_USAGES/LOADING',
    isLoading: status
});

export const markAsFetchSuccess = toolUsages => ({
    type: 'TOOL_USAGES/FETCH_SUCCESS',
    toolUsages: toolUsages,
});

export const markAsFetchError = status => ({
    type: 'TOOL_USAGES/FETCH_ERROR',
    hasError: status
});


export const fetchToolUsages = (startDate, endDate) => {
    return (dispatch) => {
        dispatch(markAsLoading(true));

        new Promise((resolve, reject) => {
            let namesUrl = 'http://localhost:8080/v1/tools';
            let usagesUrl = 'http://localhost:8080/v1/tools/usages';

            fetch(namesUrl)
                .then((response) => {
                    if (!response.ok) {
                        reject(response);
                    }
                    return response.json();
                })
                .then(names => {
                    console.debug(names);

                    fetch(usagesUrl + '?toolNames=' + names)
                        .then((response) => {
                            if (!response.ok) {
                                reject(response);
                            }
                            return resolve(response.json());
                        });
                })
                .catch(error => reject(error));

        }).then(data => {
            dispatch(markAsLoading(false));
            dispatch(markAsFetchSuccess(data));

        }).catch(error => {
            console.error(error);

            dispatch(markAsFetchError(true));
        });
    }
};
