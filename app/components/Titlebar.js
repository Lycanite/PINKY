import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import { Link } from 'react-router';
import styles from './Titlebar.css';

export default class Titlebar extends Component {
  render() {
    return (
      <Layout type="row" className={styles.titleBar}>
        <Flex></Flex>
        <Fixed>
          _ [] X
        </Fixed>
      </Layout>
    );
  }
}
