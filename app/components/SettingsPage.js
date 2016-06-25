import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import { Link } from 'react-router';
import styles from './Main.css';

export default class SettingsPage extends Component {
  render() {
    return (
      <Flex className={styles.main}>
        <h1>Settings</h1>
          <p>Configure both launcher settings and global profile settings.</p>
      </Flex>
    );
  }
}
