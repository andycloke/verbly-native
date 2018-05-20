import * as React from 'react';
import { Header, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import OptionsMenu from '../features/options/containers/OptionsMenu';

const Sidebar = () => (
  <React.Fragment>
    <Header />
    <Content style={styles.background}>
      <OptionsMenu />
    </Content>
  </React.Fragment>
);

export default Sidebar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white'
  }
});
