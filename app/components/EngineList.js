import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import { Link } from 'react-router';
import styles from './Main.css';

export default class EngineList extends Component {
  render() {
    return (
      <Flex className={styles.main}>
        <h1>Game Engines</h1>
        <p>Add or remove your Doom game engines such as ZDoom or GZDoom, not all engines are supported but can still be added and PINKY can treat it like a supported engine.</p>
      </Flex>
    );
  }
}
