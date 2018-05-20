import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

import { StateProps } from '../../../core/features/game/containers/ConjugationsTable';

class ConjugationsTable extends React.PureComponent<StateProps> {
  render() {
    return (
      <Card>
        {this.props.conjugations.map(({ person, conjugation, highlight }) => (
          <CardItem style={highlight ? null : style.row} key={person} bordered>
            <Text
              style={[style.personText, highlight ? style.highlightText : null]}
            >
              {person}{' '}
            </Text>
            <Text style={highlight ? style.highlightText : null}>
              {conjugation}
            </Text>
          </CardItem>
        ))}
      </Card>
    );
  }
}

export default ConjugationsTable;

const style = StyleSheet.create({
  personText: {
    width: 105
  },
  row: {
    backgroundColor: '#fafafa'
  },
  highlightText: {
    fontWeight: 'bold'
  }
});
