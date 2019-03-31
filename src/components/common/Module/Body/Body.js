import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Body.module.css';

class Body extends React.Component {
  static propTypes = {
    fluid: PropTypes.bool,
    padding: PropTypes.bool
  };

  static defaultProps = {
    fluid: false,
    padding: true
  };

  render() {
    const { fluid, padding, className, ...props } = this.props;
    return (
      <div
        {...props}
        className={classNames(
        fluid ? styles.moduleFluid : styles.module,
        padding ? styles.modulePadding : styles.moduleWithoutPadding,
        className
      )}/>
    );
  }
}

export default Body;
