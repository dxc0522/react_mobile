import actionType from './actionTypes';
const defaultState = {
    homeClick: 0,
    homeList: [0]
};
export default (state = defaultState, action = {}) => {
    switch (action.type) {
        case actionType.CHANGE_ITEM:
            return {
                ...state,
                homeClick: action.data
            }
        case actionType.CHANGE_LIST:
            return {
                ...state,
                homeList: [...state.homeList, action.data]
            }
        default:
            return state
    }
}