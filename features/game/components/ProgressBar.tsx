import * as React from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { Props } from '../../../core/features/game/containers/ProgressBar';

const EASING = Easing.inOut(Easing.ease);
const EASING_DURATION = 400;

type State = {
  progress: Animated.Value;
};

class ProgressBar extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      progress: new Animated.Value(
        this.getProgress(
          props.questionsCorrect,
          props.questionsCorrectTarget
        ) || 0
      )
    };
  }

  getProgress = (questionsCorrect: number, questionsCorrectTarget: number) =>
    questionsCorrect / questionsCorrectTarget;

  componentDidUpdate(prevProps: Props, prevState: State) {
    const prevProgress = this.getProgress(
      prevProps.questionsCorrect,
      prevProps.questionsCorrectTarget
    );
    const thisProgress = this.getProgress(
      this.props.questionsCorrect,
      this.props.questionsCorrectTarget
    );
    if (thisProgress >= 0 && thisProgress != prevProgress) {
      this.update();
    }
  }

  update() {
    Animated.timing(this.state.progress, {
      easing: EASING,
      duration: EASING_DURATION,
      toValue: this.getProgress(
        this.props.questionsCorrect,
        this.props.questionsCorrectTarget
      )
    }).start();
  }

  render() {
    const fillWidth = this.state.progress.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%']
    });
    const { questionsCorrect, questionsCorrectTarget } = this.props;
    return (
      <View style={styles.background}>
        <Animated.View style={[styles.bar, { width: fillWidth }]} />
      </View>
    );
  }
}

export default ProgressBar;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    height: 5,
    overflow: 'hidden'
  },
  bar: {
    backgroundColor: 'rgb(82, 201, 82)',
    height: 5
  }
});

// borrows from https://github.com/lwansbrough/react-native-progress-bar
