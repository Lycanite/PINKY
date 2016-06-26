import React, { Component, PropTypes } from 'react';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import ClassNames from 'classnames';
import styles from './Titlebar.css';

const electron = require('electron');
//const browserWindow = electron.getCurrentWindow();

export default class Titlebar extends Component {
  _windowMinimize() {
    console.log("Minimize!");
  }

  _windowMaximize() {
    alert("Maximize!");
  }

  _windowClose() {
    alert("Close!");
  }

  render() {
    const windowMaximizeButton = ClassNames({
      'fa fa-plus-square': true,//!electron.getCurrentWindow(),
      'fa fa-minus-square': false//electron.getCurrentWindow()
    });

    return (
      <div>
      <span onClick={function() {alert("left")}}>_ </span>
      <Layout type="row" className={styles.titleBar}>
        <Flex></Flex>
        <Fixed className={styles.windowControls}>
          <button onClick={this._windowMinimize.bind(this)}><i className="fa fa-chevron-down"></i></button>
          <i className={windowMaximizeButton} onClick={this._windowMaximize.bind(this)}></i>
          <i className="fa fa-close" onClick={this._windowClose.bind(this)}></i>
        </Fixed>
      </Layout>
      </div>
    );
  }
}
