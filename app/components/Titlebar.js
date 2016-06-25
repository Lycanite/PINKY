import React, { Component } from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import styles from './Titlebar.css';

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

export default class Titlebar extends Component {
  minimize() {
    alert("Minimize!");
  }

  maximize(e) {
    alert("Maximize!");
  }

  close(e) {
    alert("Close!");
  }

  render() {
    return (
      <div>
      <span onClick={function() {alert("left")}}>_ </span>
      <Layout type="row" className={styles.titleBar}>
        <Flex></Flex>
        <Fixed className={styles.windowControls}>
          <i className="fa fa-chevron-down" onClick={() => this.minimize}></i>
          <i className="fa fa-plus-square" onClick={this.maximize}></i>
          <i className="fa fa-close" onClick={this.close}></i>
        </Fixed>
      </Layout>
      </div>
    );
  }
}
