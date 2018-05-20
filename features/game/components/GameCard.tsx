import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Input, Text, CardItem } from 'native-base';
import { DISPLAY_TEXT } from '../../../core/constants/tenses';
import SubmitButton from './SubmitButton';

// import CheckIcon from 'material-ui/svg-icons/navigation/check';
// import CrossIcon from 'material-ui/svg-icons/navigation/close';

type Props = {
  tense: string;
  verb: string;
  person: string;
  handleUserAnswerChange: (newValue: string) => void;
  //   makeAnswerInputRef: (input: TextField) => void;
  englishInfinitive: string;
  userAnswer: string;
  disabled: boolean;
  correct: boolean;
  incorrect: boolean;
  handleSubmitClick: (event: any) => void;
};

export const positiveGreen = '#52c952';
const negativeRed = '#c10e0e';

const GameCard = ({
  tense,
  person,
  verb,
  handleUserAnswerChange,
  //   makeAnswerInputRef,
  englishInfinitive,
  userAnswer,
  disabled,
  correct,
  incorrect,
  handleSubmitClick
}: Props) => {
  //   const underlineStyle: { borderBottom?: string } = {};
  //   const inputStyle: { color?: string; paddingRight: string } = {
  //     paddingRight: '27px'
  //   };
  //   let icon = null;
  //   if (correct) {
  //     underlineStyle.borderBottom = `2px solid ${positiveGreen}`;
  //     inputStyle.color = positiveGreen;
  //     icon = <CheckIcon color={positiveGreen} />;
  //   } else if (incorrect) {
  //     underlineStyle.borderBottom = `2px solid ${negativeRed}`;
  //     inputStyle.color = negativeRed;
  //     icon = <CrossIcon color={negativeRed} />;
  //   }
  return (
    <Card>
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
          <Input
            //   ref={makeAnswerInputRef}
            autoFocus
            autoCapitalize="none"
            autoCorrect={false}
            blurOnSubmit={false}
            onChangeText={handleUserAnswerChange}
            value={userAnswer}
            disabled={disabled}
          />
          {/* <div className="GameCard__inputIconContainer">{icon}</div> */}
          <SubmitButton onPress={handleSubmitClick} />
        </View>
      </CardItem>
    </Card>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  inputButtonCell: {
    flexDirection: 'row'
  }
});
