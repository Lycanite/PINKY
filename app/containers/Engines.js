import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import EngineList from '../components/EngineList';

export default class Engines extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Layout type="row">
          <Fixed>
            <Sidebar />
          </Fixed>
          <Flex>
            <EngineList />
        </Flex>
        </Layout>
      </div>
    );
  }
}
