import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import history from './history';
import store from './store';
import App from './components/app/App';
import Main from './components/app/Main';
import Login from './components/login/Login';
import ContactForm from './components/contact/ContactForm';
import VendorProfile from './components/vendor-profile';
import debug from 'debug';

window._debug = debug;

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = `http://${window.location.hostname}:5000`;
  axios.defaults.withCredentials = true;
}

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Main} />
				<Route path="login" component={Login} />
				<Route path="contact" component={ContactForm} />
				<Route path="vendor-profile" component={VendorProfile} />
			</Route>
		</Router>
	</Provider>
), document.querySelector('#app'));
