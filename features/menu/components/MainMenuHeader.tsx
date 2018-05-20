import * as React from 'react';
import { Header, Text, Title, Left, Body, Right } from 'native-base';
import { Link } from 'react-router-native';

import { pathToGame } from '../../../core/paths';

const MainMenuHeader = () => {
  return (
    <Header>
      <Left />
      <Body>
        <Title>Menu</Title>
      </Body>
      <Right>
        <Link to={pathToGame()}>
          <Text>Play</Text>
        </Link>
      </Right>
    </Header>
  );
};

export default MainMenuHeader;
