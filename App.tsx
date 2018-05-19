import * as React from 'react';
import { Provider } from 'react-redux';
import { Container, Content, Header, Text } from 'native-base';

import store from './store';

export default class App extends React.Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Header />
          <Content>
            <Text>Test up App.ts to start working on your app!</Text>
          </Content>
        </Container>
      </Provider>
    );
  }
}
