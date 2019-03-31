import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './More.module.css';

class More extends React.Component {
  static propTypes = {
    href: PropTypes.string
  };

  static defaultProps = {
    href: '/'
  };

  render() {
    const { href, className, ...props } = this.props;
    return (
      <a
        {...props}
        href={href}
        className={classNames(
          styles.module,
          className
        )}
      >
        See all
      </a>
    );
  }
}

export default More;
