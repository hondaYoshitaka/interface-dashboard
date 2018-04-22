export const changeStartDate = (state = {startDate: '',}, action) => {
    switch (action.type) {
        case 'START_DATE/CHANGED':
            return Object.assign(state, {
                startDate: action.startDate,
            });
        default:
            return state;
    }

};

export const changeEndDate = (state = {endDate: '',}, action) => {
    switch (action.type) {
        case 'END_DATE/CHANGED':
            return Object.assign(state, {
                endDate: action.endDate,
            });
        default:
            return state;
    }
};

