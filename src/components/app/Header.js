import React from 'react';
import {connect} from 'react-redux';
import AppActions from '../../actions/AppActions';
import NavLink from '../shared/NavLink';
import styles from './Header.scss';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  render() {
    const { user } = this.props;

    return (
      <nav>
        <div className={styles.nav}>
          <NavLink to="/">JAH</NavLink>
          <ul>
            <li><NavLink to="/vendor-profile">Vendor Profile</NavLink></li>
            { user ? (
              <li><button onClick={this.onLogoutClick}>Logout {user.username}</button></li>
            ) : (
              <li><NavLink to="/login">Login</NavLink></li>
            )
            }
          </ul>
        </div>
      </nav>
    );
  }

  onLogoutClick() {
    AppActions.logout();
  }

}

export default Header;
