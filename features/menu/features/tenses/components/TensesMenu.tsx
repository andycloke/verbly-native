import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, Body, Right, Text, Radio } from 'native-base';
import { DISPLAY_TEXT } from '../../../../../core/constants/tenses';
import { Props } from '../../../../../core/features/menu/features/tenses/containers/TensesMenu';
import ListRadioItem from '../../../../common/components/ListRadioItem';

const TensesMenu = ({ inPlay, toggleTenseInPlay }: Props) => {
  const makeClickHandler = (tense: string) => (event: any): any =>
    toggleTenseInPlay(tense);
  return (
    <List>
      {Object.keys(inPlay).map(tense => (
        <ListRadioItem
          key={tense}
          primaryText={DISPLAY_TEXT[tense].text}
          secondaryText={DISPLAY_TEXT[tense].example}
          onPress={makeClickHandler(tense)}
          selected={inPlay[tense]}
        />
      ))}
    </List>
  );
};

export default TensesMenu;

const styles = StyleSheet.create({
  subText: {
    color: 'grey'
  }
});
