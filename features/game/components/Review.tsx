import * as React from 'react';
import { View, Text } from 'react-native';
import { Props } from '../../../core/features/game/containers/Review';

const SHOW_NEXT_ROW_DELAY = 800;
const N_ROWS = 5;

type State = {
  nRowsToShow: number;
};

class Review extends React.PureComponent<Props, State> {
  render() {
    return (
      <View>
        <Text>Review</Text>
      </View>
    );
  }
}

export default Review;
