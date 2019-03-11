import { combineReducers } from 'redux'
import jobs from './jobs'
import application from './application'

export default combineReducers({
  jobs,
  application
})
