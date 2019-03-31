import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.css';

class Header extends React.Component {
  static propTypes = {
    as: PropTypes.element
  };

  static defaultProps = {
    as: 'h5'
  };

  render() {
    const { as: Component, className, ...props } = this.props;
    return (
      <Component
        {...props}
        className={classNames(
          styles.module,
          className
        )}
      />
    );
  }
}

export default Header;
