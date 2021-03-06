import * as React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Card, Text, CardItem, Icon } from 'native-base';
import { DISPLAY_TEXT } from '../../../core/constants/tenses';
import SubmitButton from './SubmitButton';

// import CheckIcon from 'material-ui/svg-icons/navigation/check';
// import CrossIcon from 'material-ui/svg-icons/navigation/close';

type Props = {
  tense: string;
  verb: string;
  person: string;
  handleUserAnswerChange: (newValue: string) => void;
  englishInfinitive: string;
  userAnswer: string;
  disabled: boolean;
  correct: boolean;
  incorrect: boolean;
  handleSubmitClick: (event: any) => void;
};

export const positiveGreen = '#52c952';
const negativeRed = '#c10e0e';

class GameCard extends React.PureComponent<Props> {
  _input: any;
  makeInputRef = (input: any) => {
    this._input = input;
  };
  focus() {
    this._input.focus();
  }
  render() {
    const {
      tense,
      person,
      verb,
      handleUserAnswerChange,
      englishInfinitive,
      userAnswer,
      disabled,
      correct,
      incorrect,
      handleSubmitClick
    } = this.props;
    let inputStyle = null;
    let icon = null;
    if (correct) {
      inputStyle = styles.inputCorrect;
      icon = (
        <Icon name="checkmark" style={[styles.icon, styles.iconCorrect]} />
      );
    } else if (incorrect) {
      inputStyle = styles.inputIncorrect;
      icon = <Icon name="close" style={[styles.icon, styles.iconIncorrect]} />;
    }

    return (
      <Card style={styles.card} noShadow>
        <CardItem bordered>
          <Text style={styles.flex1}>Tense</Text>
          <Text style={styles.flex2}>
            {tense ? DISPLAY_TEXT[tense].text : ''}
          </Text>
        </CardItem>
        <CardItem bordered>
          <Text style={styles.flex1}>Verb</Text>
          <Text style={styles.flex2}>
            {`${verb} ${englishInfinitive ? `- ${englishInfinitive}` : ''}`}
          </Text>
        </CardItem>
        <CardItem bordered>
          <Text style={styles.flex1}>{person}</Text>
          <View style={[styles.flex2, styles.inputButtonCell]}>
            <View style={styles.inputIconCell}>
              <TextInput
                ref={this.makeInputRef}
                autoFocus
                autoCapitalize="none"
                autoCorrect={false}
                blurOnSubmit={false}
                onChangeText={handleUserAnswerChange}
                value={userAnswer}
                editable={!disabled}
                style={[styles.input, inputStyle]}
              />
              <View style={styles.iconContainer}>{icon}</View>
            </View>
            <SubmitButton onPress={handleSubmitClick} />
          </View>
        </CardItem>
      </Card>
    );
  }
}
export default GameCard;

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  inputButtonCell: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: { marginTop: 0 },
  inputIconCell: {
    flex: 1,
    position: 'relative'
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    top: 15
  },
  icon: {
    textAlign: 'right',
    marginRight: 8
  },
  iconCorrect: {
    color: positiveGreen
  },
  iconIncorrect: {
    color: negativeRed
  },
  input: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginRight: 8,
    paddingRight: 20
  },
  inputCorrect: {
    color: positiveGreen,
    borderBottomColor: positiveGreen
  },
  inputIncorrect: {
    color: negativeRed,
    borderBottomColor: negativeRed
  }
});
