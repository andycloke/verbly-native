import * as React from 'react';
import { Text, Animated, Easing, StyleSheet } from 'react-native';
import { ListItem, Body, Right } from 'native-base';

type Value = string | number;

type Props = {
  newHighScore?: boolean;
  fullWidth?: boolean;
  showValues: boolean;
  scoreTooltip?: boolean;
  firstValue?: string;
  secondValue?: Value;
};

type State = {
  opacity: Animated.Value;
};

class ReviewRow extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(props.showValues ? 1 : 0)
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.showValues && !prevProps.showValues) {
      Animated.timing(this.state.opacity, {
        duration: 300,
        toValue: 1
      }).start();
    }
  }

  render() {
    const {
      scoreTooltip,
      fullWidth,
      showValues,
      firstValue,
      secondValue,
      newHighScore
    } = this.props;
    const { opacity } = this.state;
    const secondCell = (
      <Animated.Text
        style={[
          { opacity },
          fullWidth ? styles.fullWidth : null,
          newHighScore ? styles.highScore : null
        ]}
      >
        {secondValue}
      </Animated.Text>
    );
    return (
      <ListItem>
        <Body>{fullWidth ? secondCell : <Text>{firstValue}</Text>}</Body>
        {!fullWidth && <Right>{secondCell}</Right>}
      </ListItem>
    );
  }
}

export default ReviewRow;

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
    textAlign: 'center'
  },
  highScore: {
    color: '#bd4040'
  }
});
