import * as React from 'react';
import { List } from 'native-base';

import { Props } from '../../../../../core/features/options/containers/OptionsMenu';

import ListSwitchItem from '../../../../common/components/ListSwitchItem';

const OptionsMenu = ({
  displayEnglishInfinitive,
  toggleEnglishInfinitive,
  audioFeedback,
  toggleAudioFeedback
}: Props) => {
  const handleEnglishInfinitiveClick = (event: any): void =>
    toggleEnglishInfinitive();
  const handleAudioFeedbackClick = (event: any): void => toggleAudioFeedback();
  return (
    <List>
      <ListSwitchItem
        text="Display english infinitive"
        value={displayEnglishInfinitive}
        onPress={toggleEnglishInfinitive}
      />
      <ListSwitchItem
        text="Audio feedback"
        value={audioFeedback}
        onPress={toggleAudioFeedback}
        last
      />
    </List>
  );
};

export default OptionsMenu;
