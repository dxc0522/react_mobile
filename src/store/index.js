import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers';

// 定义浏览器方法
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (process.env.NODE_ENV === "development") ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
export default createStore(
    rootReducer,
    enhancer,
);


