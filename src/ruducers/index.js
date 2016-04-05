import { combineReducers } from 'redux'
import articlesReducer from './articles'
import counterReducer from './counter'

export default combineReducers({
    articles: articlesReducer,
    count: counterReducer
})
