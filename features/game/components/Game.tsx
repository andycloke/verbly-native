import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import {
  ACCENTED_LETTER_MAP,
  DISPLAY_CORRECT_ICON_DURATION,
  INPUT_FUNCS_DELAY,
  AUDIO_OPTIONS
} from '../../../core/features/game/constants';
import { Props } from '../../../core/features/game/containers/Game';

import ConjugationsTable from '../containers/ConjugationsTable';
import GameCard from './GameCard';
import AccentedLetterKey from './AccentedLetterKey';

type State = {
  showCorrectIcon: boolean;
};

class Game extends React.PureComponent<Props, State> {
  state = {
    showCorrectIcon: false
  };
  _gameCard: any;
  timeout?: NodeJS.Timer;
  mounted?: boolean;
  componentDidMount() {
    this.props.initialiseGame();
    this.mounted = true;
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.mounted = false;
  }

  handleUserAnswerChange = (newValue: string): void => {
    this.props.updateUserAnswer(newValue);
  };

  submitAndFocus = () => {
    if (this.props.userAnswerCorrect && !this.state.showCorrectIcon) {
      //   this.sayAnswer();
      if (this.mounted) {
        this.setState({ showCorrectIcon: true });
      }
      this.timeout = setTimeout(() => {
        this.props.submitAnswer();
        // this.focusAnswerInput();
        if (this.mounted) {
          this.setState({ showCorrectIcon: false });
        }
      }, DISPLAY_CORRECT_ICON_DURATION);
    } else if (!this.props.displayConjugations) {
      //   this.sayAnswer();
      this.props.submitAnswer();
      //   this.blurAnswerInput();
    } else {
      this.props.newQuestion();
      this.focusAnswerInput();
    }
  };

  addAccentedLetterToUserAnswer = (letter: string) => {
    const { userAnswer, updateUserAnswer } = this.props;
    updateUserAnswer(userAnswer + letter);
    // TODO - take account of caret position
  };

  makeLetterButtonClickHandler = (letter: string) => (e: any) => {
    // e.preventDefault();
    this.addAccentedLetterToUserAnswer(letter);
  };

  makeGameCardRef = (c: any) => {
    this._gameCard = c;
  };

  focusAnswerInput = () => {
    this._gameCard.focus();
  };

  render() {
    const {
      tense,
      person,
      verb,
      englishInfinitive,
      userAnswer,
      displayConjugations
    } = this.props;
    return (
      <View>
        <GameCard
          ref={this.makeGameCardRef}
          correct={this.state.showCorrectIcon}
          incorrect={displayConjugations}
          tense={tense}
          person={person}
          verb={verb}
          handleUserAnswerChange={this.handleUserAnswerChange}
          englishInfinitive={englishInfinitive}
          userAnswer={userAnswer}
          disabled={displayConjugations}
          handleSubmitClick={this.submitAndFocus}
        />
        {displayConjugations ? (
          <ConjugationsTable />
        ) : (
          <View style={styles.letterButtonRow}>
            {Object.values(ACCENTED_LETTER_MAP).map((letter: string) => (
              <AccentedLetterKey
                key={letter}
                letter={letter}
                onPress={this.makeLetterButtonClickHandler(letter)}
              />
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default Game;

const styles = StyleSheet.create({
  letterButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});
