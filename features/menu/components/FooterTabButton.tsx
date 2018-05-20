import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, FooterTab } from 'native-base';

type Props = {
  onPress: (e: any) => void;
  text: string;
  active: boolean;
};

const FooterTabButton = ({ onPress, text, active }: Props) => (
  <FooterTab>
    <Button onPress={onPress}>
      <Text style={active ? styles.textHighlighted : null}>{text}</Text>
    </Button>
  </FooterTab>
);

export default FooterTabButton;

const styles = StyleSheet.create({
  textHighlighted: {
    color: '#007aff'
  }
});
