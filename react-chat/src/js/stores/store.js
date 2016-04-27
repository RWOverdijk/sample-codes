import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import messageReducer from '../reducers/message';

// Combine Reducers
var reducers = combineReducers({
    messageReducer: messageReducer
    // more if you want...
});

// Create Store
var store = createStore(
		reducers,
    	applyMiddleware(thunk)
	);

export default store;