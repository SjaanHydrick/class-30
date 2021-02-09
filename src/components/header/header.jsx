import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <h1>AC VILLAGERS</h1>
      </div>
    );
  }
}
