import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Trending.module.css';

import {
  ModuleHeader,
  ModuleBody,
  ModuleMore
} from "../../common/Module";

class Trending extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  static defaultProps = {
    data: []
  };

  render() {
    return (
      <div className={styles.module}>
        <ModuleHeader>
          Trending
        </ModuleHeader>
        <ModuleBody fluid>
          {
            this.props.data.map(item =>
              <a href="/" key={item.id} className={styles.item}>
                <span className={styles.tag}>
                  {item.tag}
                </span>
                <span className={styles.posts}>
                  {item.postsCount} posts
                </span>
              </a>
            )
          }
        </ModuleBody>
        <ModuleMore/>
      </div>
    );
  }
}

export default Trending;
