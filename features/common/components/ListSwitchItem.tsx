import * as React from 'react';
import { List, ListItem, Body, Right, Text, Switch } from 'native-base';

type Props = {
  onPress: any;
  text: string;
  value: boolean;
  last?: boolean;
};

const ListSwitchItem = ({ onPress, text, value, last }: Props) => (
  <ListItem onPress={onPress} last={last}>
    <Body>
      <Text>{text}</Text>
    </Body>
    <Right>
      <Switch value={value} />
    </Right>
  </ListItem>
);

export default ListSwitchItem;
