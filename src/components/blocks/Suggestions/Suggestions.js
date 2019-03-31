import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Suggestions.module.css';

import {
  ModuleHeader,
  ModuleBody,
  ModuleMore
} from '../../common/Module';

class Suggestions extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  static defaultProps = {
    data: []
  };

  render() {
    return (
      <div
        className={classNames(
          styles.module,
          this.props.className
        )}>
        <ModuleHeader>
          Suggestions for you
        </ModuleHeader>
        <ModuleBody className={styles.body} padding={false}>
          {
            this.props.data.map(item =>
              <div key={item.id} className={styles.item}>
                <div className={styles.user}>
                  <div className={styles.avatar}>
                    <img src={item.avatarUrl} alt={item.username}/>
                  </div>
                  <div className={styles.content}>
                    <a href="/" className={styles.username}>
                      {item.username}
                    </a>
                    <span className={styles.tag}>
                      @{item.tag}
                    </span>
                  </div>
                </div>
                <button type="submit" className={styles.addUser}>
                  <span className="icon-add-people"/>
                </button>
              </div>
            )
          }
        </ModuleBody>
        <ModuleMore/>
      </div>
    );
  }
}

export default Suggestions;
