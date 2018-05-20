import * as React from 'react';
import { Content, Drawer, Button, Text, FooterTab, Footer } from 'native-base';

import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';

import MainMenuHeader from './MainMenuHeader';
import Sidebar from './Sidebar';
import FooterTabButton from './FooterTabButton';

type State = {
  activeTabIndex: number;
};

class MainMenu extends React.PureComponent<void, State> {
  state = {
    activeTabIndex: 1
  };
  drawer: any;
  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };
  makeChangeTab = (index: number) => (e: any) =>
    this.setState({ activeTabIndex: index });
  render() {
    const { activeTabIndex } = this.state;
    const tab0Active = activeTabIndex === 0;
    const tab1Active = activeTabIndex === 1;
    const tab2Active = activeTabIndex === 2;
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
            {tab0Active && <PeopleMenu />}
            {tab1Active && <TensesMenu />}
            {tab2Active && <VerbsMenu />}
          </Content>
          <Footer>
            <FooterTabButton
              onPress={this.makeChangeTab(0)}
              text="People"
              active={tab0Active}
            />
            <FooterTabButton
              onPress={this.makeChangeTab(1)}
              text="Tenses"
              active={tab1Active}
            />
            <FooterTabButton
              onPress={this.makeChangeTab(2)}
              text="Verbs"
              active={tab2Active}
            />
          </Footer>
        </React.Fragment>
      </Drawer>
    );
  }
}

export default MainMenu;
