import React from 'react';
import AppActions from '../../actions/AppActions';
import Form from '../form/Form';
import styles from './ContactForm.scss';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      processing: false,
      feedback: null,
      messageSent: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(
      this.state.processing === nextState.processing &&
      this.state.feedback === nextState.feedback &&
      this.state.messageSent === nextState.messageSent
    );
  }

  render() {
    const inputs = [
      { type: 'text', name: 'name', placeholder: 'Name', value: '' },
      { type: 'text', name: 'email', placeholder: 'Email', value: '' },
      { type: 'textarea', name: 'message', placeholder: 'Message', value: '' }
    ];

    return (
      <div className={styles.wrapper}>
        { this.state.messageSent ? (
            <div>
              <p>Thanks! We'll be in touch soon.</p>
              <div>
                <button role="btn-sm" onClick={() => this.setState({ messageSent: false })}>SEND ANOTHER MESSAGE</button>
              </div>
            </div>
          ) : (
            <Form 
              title="Contact" 
              inputs={inputs} 
              processing={this.state.processing} 
              feedback={this.state.feedback} 
              onSubmit={this.onSubmit} />
          )
        }
      </div>
    );
  }

  onSubmit(data) {
    const { name, email, message } = data;
    if (!(name && email && message)) {
      alert('Please fill in all fields.');
      return;
    }

    this.setState({ processing: true, feedback: null });
    return AppActions.sendContactRequestMessage(name, email, message)
      .then(() => {
        this.setState({ processing: false, messageSent: true });
      })
      .catch(() => {
        this.setState({ feedback: 'Oops! An error occurred. Please try again.', processing: false });
      });
  }

}
