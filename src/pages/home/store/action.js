import actions from './actionTypes'

export const changeList = (data) => {
    return {
        type: actions.CHANGE_LIST,
        data
    }
}
export const changeItem = (data) => {
    return {
        type: actions.CHANGE_ITEM,
        data
    }
}
export const asyncChangeItem = () => {
    return dispatch => {
        console.log(dispatch)
    }
}