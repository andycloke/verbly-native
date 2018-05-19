import * as React from 'react';
import { Content, Tab, Tabs } from 'native-base';
import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';

const MainMenu = () => {
  return (
    <Content>
      <Tabs initialPage={2}>
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
  );
};

export default MainMenu;
