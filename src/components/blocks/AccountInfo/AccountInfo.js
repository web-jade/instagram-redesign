import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './AccountInfo.module.css';

class AccountInfo extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    backgroundUrl: PropTypes.string.isRequired,
    postsCount: PropTypes.number.isRequired,
    followersCount: PropTypes.number.isRequired,
    followingCount: PropTypes.number.isRequired
  };

  static defaultProps = {
    username: null,
    login: null,
    backgroundUrl: null,
    postsCount: 0,
    followersCount: 0,
    followingCount: 0
  };

  render() {
    const {
      username,
      login,
      avatarUrl,
      backgroundUrl,
      postsCount,
      followersCount,
      followingCount,
      className
    } = this.props;

    return (
      <div className={classNames(
        styles.module,
        className
      )}>
        <div className={styles.background} style={{backgroundImage: `url(${backgroundUrl})`}}>
          <a href="/" className={styles.avatar}>
            <img src={avatarUrl} alt={username}/>
          </a>
        </div>
        <div className={styles.body}>
          <a href="/" className={styles.username}>
            {username}
          </a>
          <span className={styles.login}>
            {login}
          </span>
          <div className={styles.stats}>
            <a href="/" className={styles.item}>
              <span className={styles.count}>
                {postsCount}
              </span>
              <span className={styles.type}>
                Posts
              </span>
            </a>
            <a href="/" className={styles.item}>
              <span className={styles.count}>
                {followersCount}
              </span>
              <span className={styles.type}>
                Followers
              </span>
            </a>
            <a href="/" className={styles.item}>
              <span className={styles.count}>
                {followingCount}
              </span>
              <span className={styles.type}>
                Following
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountInfo;
