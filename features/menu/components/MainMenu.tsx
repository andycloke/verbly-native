import * as React from 'react';
import {
  Content,
  Tab,
  Tabs,
  Drawer
} from 'native-base';

import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';

import MainMenuHeader from './MainMenuHeader';
import Sidebar from './Sidebar';

class MainMenu extends React.PureComponent<void> {
  drawer: any;
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}
      >
        <React.Fragment>
          <MainMenuHeader openDrawer={this.openDrawer} />
          <Content>
            <Tabs initialPage={1}>
              <Tab heading="People">
                <PeopleMenu />
              </Tab>
              <Tab heading="Tenses">
                <TensesMenu />
              </Tab>
              <Tab heading="Verbs">
                <VerbsMenu />
              </Tab>
            </Tabs>
          </Content>
        </React.Fragment>
      </Drawer>
    );
  }
}

export default MainMenu;
