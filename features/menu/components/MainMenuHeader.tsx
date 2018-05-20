import * as React from 'react';
import {
  Header,
  Text,
  Title,
  Subtitle,
  Left,
  Body,
  Right,
  Icon
} from 'native-base';
import { Link } from 'react-router-native';

import { pathToGame } from '../../../core/paths';

type Props = {
  openDrawer: () => void;
};

const MainMenuHeader = ({ openDrawer }: Props) => {
  return (
    <Header hasTabs>
      <Left>
        <Icon name="menu" onPress={openDrawer} />
      </Left>
      <Body>
        <Title>Menu</Title>
        <Subtitle>Verbly</Subtitle>
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
