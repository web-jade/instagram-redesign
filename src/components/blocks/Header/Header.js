import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.css';

import Container from "../../common/Container/Container";
import Logo from "../../../assets/logo.svg";

class Header extends Component {
  static propTypes = {
    notification: PropTypes.bool.isRequired
  };

  static defaultProps = {
    notification: false
  };

  render() {
    const { notification } = this.props;

    const notificationElement = classNames(
      styles.nav,
      styles.navTypeInbox,
      notification ? styles.navNotificationActive : styles.navNotificationInActive
    );

    return (
      <header className={styles.module}>
        <Container className={styles.container}>
          <nav className={styles.navbar}>
            <a href="/" className={classNames(styles.nav, styles.navTypeExplore)}>
              <span className="icon-explore"/>
            </a>
            <a href="/" className={classNames(styles.nav, styles.navTypeNotification)}>
              <span className="icon-notification"/>
            </a>
            <a href="/" className={notificationElement}>
              <span className="icon-inbox"/>
            </a>
          </nav>
          <a href="/" className={styles.logo}>
            <img src={Logo} alt="Instagram"/>
          </a>
          <div className={styles.account}>
            <button type="button" className={styles.search}>
              <span className="icon-search"/>
            </button>
            <a href="/" className={styles.avatar}>
              <img src="https://www.lragir.am/ru/wp-content/uploads/sites/3/2011/10/131787794832-1.jpg" alt="Steve Jobs"/>
            </a>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
