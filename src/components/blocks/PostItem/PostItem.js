import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './PostItem.module.css';

class PostItem extends Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired
  };

  static defaultProps = {
    userName: null,
    date: null,
    imageUrl: null,
    description: null,
    likesCount: 0,
    comments: []
  };

  render() {
    const {
      userName,
      date,
      imageUrl,
      description,
      likesCount,
      className
    } = this.props;

    return (
      <article
        className={classNames(
          styles.module,
          className
        )}>
        <header className={styles.header}>
          <div className={styles.avatar}>
            <img src={imageUrl} alt={userName}/>
          </div>
          <a href="/" className={styles.username}>
            {userName}
          </a>
          <div className={styles.date}>
            {new Date(date).getHours()} hrs ago
          </div>
        </header>
        <figure className={styles.image}>
          <div className={styles.imageWrapper}>
            <img src={imageUrl} alt={userName}/>
          </div>
          <figcaption className={styles.description}>
            <a href="/" className={styles.descriptionUser}>{userName}:</a> {description}
          </figcaption>
        </figure>
        <div className={styles.body}>
          <button className={styles.showComments}>
            view all {this.props.comments.length} comments
          </button>
          <div className={styles.comments}>
            {
              this.props.comments.map(item =>
                <div key={item.id} className={styles.comment}>
                  <a href="/" className={styles.commentUser}>{item.username}</a>: {item.text}
                </div>
              )
            }
          </div>
          <div className={styles.controls}>
            <div className={styles.leftControls}>
              <button type="button" className={styles.control}>
                <span className="icon-like"/>
                {likesCount}
              </button>
              <button type="button" className={styles.control}>
                <span className="icon-comment"/>
                {this.props.comments.length}
              </button>
              <button type="button" className={styles.control}>
                <span className="icon-direct"/>
              </button>
            </div>
            <div className={styles.rightControls}>
              <button type="button" className={styles.more}>
                <span className="icon-more"/>
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default PostItem;
