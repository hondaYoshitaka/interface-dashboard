import {combineReducers} from 'redux'

import {fetchToolNamesError, fetchToolNamesSuccess, loadToolNames} from './tool-name'
import {fetchToolUsagesError, fetchToolUsagesSuccess, loadToolUsages} from './tool-usage'
import {clickSearch} from './serch-button'

export default combineReducers({
    loadToolNames,
    fetchToolNamesError,
    fetchToolNamesSuccess,
    fetchToolUsagesError,
    fetchToolUsagesSuccess,
    loadToolUsages,
    clickSearch,
})
