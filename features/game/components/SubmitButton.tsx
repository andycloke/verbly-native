import * as React from 'react';
import { Button, Icon } from 'native-base';

type Props = {
  onPress: (e: any) => void;
};

const SubmitButton = ({ onPress }: Props) => (
  <Button onPress={onPress}>
    <Icon name="arrow-forward" />
  </Button>
);

export default SubmitButton;
