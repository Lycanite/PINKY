import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import SettingsPage from '../components/SettingsPage';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Layout type="row">
          <Fixed>
            <Sidebar />
          </Fixed>
          <Flex>
            <SettingsPage />
        </Flex>
        </Layout>
      </div>
    );
  }
}
