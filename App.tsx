import * as React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';
import { Container, Text } from 'native-base';

import { pathToGame, pathToHome } from './core/paths';

import ReceiveConjugationsWrapper from './features/conjugations/containers/ReceiveConjugationsWrapper';
import MainMenu from './features/menu/components/MainMenu';
import GameContainer from './features/game/containers/GameContainer';

import store from './store';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ReceiveConjugationsWrapper>
          <NativeRouter>
            <Container>
              <Route path={pathToHome()} exact component={MainMenu} />
              <Route path={pathToGame()} component={GameContainer} />
            </Container>
          </NativeRouter>
        </ReceiveConjugationsWrapper>
      </Provider>
    );
  }
}
