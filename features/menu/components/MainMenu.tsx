import * as React from 'react';
import {
  Content,
  Tab,
  Tabs,
  Header,
  Text,
  Title,
  Left,
  Body,
  Right
} from 'native-base';
import { Link } from 'react-router-native';

import { pathToGame } from '../../../core/paths';

import PeopleMenu from '../features/people/containers/PeopleMenu';
import TensesMenu from '../features/tenses/containers/TensesMenu';
import VerbsMenu from '../features/verbs/containers/VerbsMenu';

import MainMenuHeader from './MainMenuHeader';

const MainMenu = () => {
  return (
    <React.Fragment>
      <MainMenuHeader />
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
    </React.Fragment>
  );
};

export default MainMenu;
