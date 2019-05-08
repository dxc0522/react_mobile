import { combineReducers } from "redux";
import { reducer as home } from '../pages/home/store'
import person from '../pages/person/store'
export default combineReducers({
    home,
    person
})