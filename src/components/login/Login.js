import React from 'react';
import AppActions from '../../actions/AppActions';
import history from '../../history';
import Form from '../form/Form';
import styles from './Login.scss';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      processing: false,
      feedback: null
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const inputs = [
      { type: 'text', name: 'username', placeholder: 'Username or email', props: { autoCapitalize: 'off' }},
      { type: 'password', name: 'password', placeholder: 'Password' }
    ];

    return (
      <div className={`page ${styles.wrapper}`}>
        <Form 
          title="Login" 
          inputs={inputs}
          processing={this.state.processing} 
          feedback={this.state.feedback} 
          onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit(data) {
    const { username, password } = data;

    this.setState({ processing: true, feedback: null });
    return AppActions.login(username, password)
      .then(() => {
        this.setState({ processing: false, username: '', password: '' });
        history.push('/');
      })
      .catch((err) => {
        this.setState({ processing: false, feedback: err.message });
      });
  }

}
