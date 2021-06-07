import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import usersProfile from './features/usersProfile/reducers/usersProfile';

const rootReducer = combineReducers({
    usersProfile,
});

const middlewares = [thunk];

/* Agrega middlewares */
const configureStore = () => createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares)),
);

export default configureStore;
