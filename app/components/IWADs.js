import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './IWADs.css';


export default class IWADs extends Component {
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
