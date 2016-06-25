import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import { Link } from 'react-router';
import styles from './Main.css';

export default class IWADList extends Component {
  render() {
    return (
      <Flex className={styles.main}>
        <h1>IWADs</h1>
          <p>Organize your main game files such as DOOM2.WAD.</p>
      </Flex>
    );
  }
}
