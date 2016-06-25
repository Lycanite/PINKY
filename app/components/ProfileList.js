import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import { Link } from 'react-router';
import styles from './Main.css';

export default class ProfileList extends Component {
  render() {
    return (
      <Flex className={styles.main}>
        <h1>Profiles</h1>
        <p>Launch, Add or Remove your PINKY Profiles! Profiles contain an IWAD, have a dedicated Game Engine and a list of addon files along with some settings.</p>
      </Flex>
    );
  }
}
