import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Sidebar.css';

export default class SettingsPage extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>PINKY</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
