import store from '../store';
import axios from 'axios';
import history from '../history';
import {LOGIN, LOGOUT} from '../constants';

const debug = require('debug')('jah:actions:AppActions');

export default class AppActions {

  static getSession() {
    return axios.get('/api/login')
      .then((res) => {
        if (res.data) {
          store.dispatch({
            type: LOGIN,
            user: res.data
          });
        }

        return res.data;
      })
      .catch((res) => {
        const msg = 'Error getting session.'; 
        debug(msg);
        debug('res:', res);
        return Promise.reject(new Error(msg));
      });
  }

  static login(username, password) {
    return axios.post('/api/login', { username, password })
      .then((res) => {
        store.dispatch({
          type: LOGIN,
          user: res.data
        });

        return res.data;
      })
      .catch((res) => {
        debug('Error logging in.');
        debug('res:', res);
        return Promise.reject(new Error('Invalid credentials.'));
      });
  }

  static logout() {
    store.dispatch({
      type: LOGOUT
    });

    history.push('/');
  }

  static sendContactRequestMessage(name, email, message) {
    const data = {
      name,
      email,
      message
    };
    
    return axios.post('/api/contact', data)
      .then((res) => {
        debug('sendContactRequestMessage success');
        debug('res:', res);
        return res.data;
      })
      .catch((res) => {
        debug('sendContactRequestMessage error');
        debug('res:', res);
        return Promise.reject(new Error(res.data));
      });
  }

}
