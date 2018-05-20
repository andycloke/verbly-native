import * as React from 'react';
import { Header, Icon, Title, Left, Body, Right } from 'native-base';
import { Link } from 'react-router-native';

import { pathToHome } from '../../../core/paths';

const GameHeader = () => {
  return (
    <Header>
      <Left>
        <Link to={pathToHome()}>
          <Icon name="arrow-back" />
        </Link>
      </Left>
      <Body>
        <Title>Verbly</Title>
      </Body>
      <Right />
    </Header>
  );
};

export default GameHeader;
