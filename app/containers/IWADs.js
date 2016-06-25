import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import IWADList from '../components/IWADList';

export default class IWADs extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Layout type="row">
          <Fixed>
            <Sidebar />
          </Fixed>
          <Flex>
            <IWADList />
        </Flex>
        </Layout>
      </div>
    );
  }
}
