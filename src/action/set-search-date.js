export const setStartDate = (date) => ({
    type: 'START_DATE/CHANGED',
    startDate: date
});

export const setEndDate = (date) => ({
    type: 'END_DATE/CHANGED',
    endDate: date
});
