import * as React from 'react';
import { Provider } from 'react-redux';
import { Container, Content, Header, Text } from 'native-base';
import MainMenu from './features/menu/components/MainMenu';

import store from './store';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header />
          <Content>
            <MainMenu />
          </Content>
        </Container>
      </Provider>
    );
  }
}
