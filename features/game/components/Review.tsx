import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Button, Text } from 'native-base';
import { Link } from 'react-router-native';

import { Props } from '../../../core/features/game/containers/Review';
import { pathToGame } from '../../../core/paths';

import ReviewRow from './ReviewRow';

const SHOW_NEXT_ROW_DELAY = 800;
const N_ROWS = 5;

type State = {
  nRowsToShow: number;
};

class Review extends React.PureComponent<Props, State> {
  state = {
    nRowsToShow: 0
  };

  rowInterval?: NodeJS.Timer;

  componentDidMount() {
    this.rowInterval = setInterval(
      () =>
        this.setState(
          (prevState: State) => ({
            nRowsToShow: prevState.nRowsToShow + 1
          }),
          () => {
            if (this.state.nRowsToShow >= N_ROWS) {
              this.rowInterval && clearInterval(this.rowInterval);
            }
          }
        ),
      SHOW_NEXT_ROW_DELAY
    );
  }

  componentWillUnmount() {
    this.rowInterval && clearInterval(this.rowInterval);
  }

  handleStartGameClick = (e: any): void => {
    this.props.resetGame();
    this.props.startGame();
  };

  handleEndGameClick = (e: any): void => {
    this.props.resetGame();
  };
  render() {
    const {
      questionsCorrect,
      questionsAnswered,
      timeTaken,
      difficultyMultiplier,
      gameScore,
      highScore,
      newHighScore
    } = this.props;
    const { nRowsToShow } = this.state;
    return (
      <View style={styles.container}>
        <List>
          <ReviewRow
            firstValue="Questions correct"
            secondValue={`${questionsCorrect} / ${questionsAnswered}`}
            showValues={nRowsToShow >= 1}
          />
          <ReviewRow
            firstValue="Time"
            secondValue={`${timeTaken / 1000}s`}
            showValues={nRowsToShow >= 2}
          />
          <ReviewRow
            firstValue="Difficulty"
            secondValue={difficultyMultiplier.toFixed(2)}
            showValues={nRowsToShow >= 3}
          />
          <ReviewRow
            scoreTooltip
            firstValue="Score"
            secondValue={gameScore}
            showValues={nRowsToShow >= 4}
          />
          <ReviewRow
            fullWidth
            secondValue={
              newHighScore
                ? 'New High Score! 🔥'
                : `Your high score: ${highScore}`
            }
            newHighScore={newHighScore}
            showValues={nRowsToShow >= 5}
          />
        </List>
        <Link to={pathToGame()}>
          <Button full onPress={this.handleStartGameClick}>
            <Text>Play Again</Text>
          </Button>
        </Link>
      </View>
    );
  }
}

export default Review;

const styles = StyleSheet.create({
  container: {
    // TODO
  }
});
