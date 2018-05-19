import * as React from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, Body, Right, Text, Radio } from 'native-base';

type Props = {
  onPress: any; // TODO
  primaryText: string;
  secondaryText?: string;
  selected: boolean;
  last?: boolean;
};

const ListRadioItem = ({
  onPress,
  primaryText,
  secondaryText,
  selected,
  last
}: Props) => (
  <ListItem onPress={onPress} last={last}>
    <Body>
      <Text>{primaryText}</Text>
      {secondaryText && <Text style={styles.subText}>{secondaryText}</Text>}
    </Body>
    <Right>
      <Radio selected={selected} />
    </Right>
  </ListItem>
);

const styles = StyleSheet.create({
  subText: {
    color: 'grey'
  }
});

export default ListRadioItem;
