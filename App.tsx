import * as React from 'react';
import { Provider } from 'react-redux';
import { Container, Content, Header } from 'native-base';
import ReceiveConjugationsWrapper from './features/conjugations/containers/ReceiveConjugationsWrapper';
import MainMenu from './features/menu/components/MainMenu';
import GameContainer from './features/game/containers/GameContainer';

import store from './store';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <ReceiveConjugationsWrapper>
          <Container>
            <Header />
            <Content>
              {/* <MainMenu /> */}
              <GameContainer />
            </Content>
          </Container>
        </ReceiveConjugationsWrapper>
      </Provider>
    );
  }
}
