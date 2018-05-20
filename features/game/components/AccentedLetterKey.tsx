import * as React from 'react';
import { Button, Text } from 'native-base';

type Props = {
  letter: string;
  onPress: (e: any) => void;
};

const AccentedLetterKey = ({ letter, onPress }: Props) => (
  <Button light onPress={onPress}>
    <Text>{letter}</Text>
  </Button>
);

export default AccentedLetterKey;
