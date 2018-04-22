import {combineReducers} from 'redux'

import {searchToolUsages} from './tool-usage-reducer'
import {changeEndDate, changeStartDate} from './search-range-date-reducer'

export default combineReducers({
    searchToolUsages,
    changeStartDate,
    changeEndDate,
})
