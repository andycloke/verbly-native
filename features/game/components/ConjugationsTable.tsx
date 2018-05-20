import * as React from 'react';
import { Card, CardItem, Text } from 'native-base';

import { StateProps } from '../../../core/features/game/containers/ConjugationsTable';

class ConjugationsTable extends React.PureComponent<StateProps> {
  render() {
    return (
      <Card>
        {this.props.conjugations.map(({ person, conjugation, highlight }) => (
          <CardItem key={person} bordered>
            <Text>{person} </Text>
            <Text>{conjugation}</Text>
          </CardItem>
        ))}
      </Card>
    );
  }
}

export default ConjugationsTable;
