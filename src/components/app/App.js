import React from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import AppActions from '../../actions/AppActions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {addPropsToChildren} from '../../util';

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    };

    this.updateHasScrolled = this.updateHasScrolled.bind(this);
  }

  getChildContext() {
    return {
      user: this.props.user
    };
  }

  componentWillMount() {
    AppActions.getSession();
  }

  render() {
    let opaqueNav = true;
    if (this.props.children && this.props.children.type === Main) {
      opaqueNav = this.state.hasScrolled; 
    }
    
    const className = classNames({ 'opaque-nav': opaqueNav });
    
    return (
      <div className={className}>
        <Header user={this.props.user} />
        {addPropsToChildren(this.props.children, { updateHasScrolled: this.updateHasScrolled })}
        <Footer />
      </div>
    );
  }

  updateHasScrolled(hasScrolled) {
    this.setState({ hasScrolled });
  }
}

App.childContextTypes = {
  user: React.PropTypes.object
};

const setProps = (state) => {
  return {
    user: state.app.user
  };
};

export default connect(setProps)(App);
