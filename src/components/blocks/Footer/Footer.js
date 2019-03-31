import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

class Footer extends Component {
  static propTypes = {
    nav: PropTypes.array.isRequired
  };

  static defaultProps = {
    nav: []
  };

  render() {
    return (
      <footer className={styles.module}>
        <nav className={styles.nav}>
          {
            this.props.nav.map(item =>
              <a key={item.id} href={item.href} className={styles.link}>
                {item.title}
              </a>
            )
          }
        </nav>
        <span className={styles.copyright}>
          © 2019 Instagram
        </span>
      </footer>
    );
  }
}

export default Footer;
