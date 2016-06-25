import React, { Component } from 'react';
import {Layout, Fixed, Flex} from 'react-layout-pane';
import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import ProfileList from '../components/ProfileList';

export default class Profiles extends Component {
  render() {
    return (
      <div>
        <Titlebar />
        <Layout type="row">
            <Sidebar />
            <ProfileList />
        </Layout>
      </div>
    );
  }
}
