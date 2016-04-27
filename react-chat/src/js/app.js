import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { Provider } from 'react-redux';
import store from './stores/store.js';

// Layouts
import Layout from './templates/layouts/main'

// Route containers
import List from './templates/routes/List-container.js';
import Chat from './templates/routes/Chat-container.js';
import Details from './templates/routes/Details-container.js';

ReactDOM.render((
    // <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
            	<IndexRoute component={List}></IndexRoute>
	            // <Route path="/" name="list" handler={List} />
			    <Route path="/chat/:name" name="chat" component={Chat} />
			    <Route path="/details/:name" name="details" component={Details} />
            </Route>
        </Router>
    // </Provider>
), document.getElementById('app'));