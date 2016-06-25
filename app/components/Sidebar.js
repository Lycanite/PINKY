import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import { Link } from 'react-router';
import styles from './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <Fixed className={styles.sidebar}>
        <Layout type="column">
          <Flex className={styles.sidebarContent}>
            <header>
              <h1>Pink<span>Y</span></h1>
              <h2>PINKY Is Not Kissing You!</h2>
            </header>
            <nav>
              <Link to="/profiles"><button>Profiles</button></Link>
              <Link to="/iwads"><button>IWADs</button></Link>
              <Link to="/engines"><button>Engines</button></Link>
              <Link to="/settings"><button>Settings</button></Link>
            </nav>
          </Flex>
          <Fixed>
            <img src="./img/pinky.gif"/>
          </Fixed>
        </Layout>
      </Fixed>
    );
  }
}
