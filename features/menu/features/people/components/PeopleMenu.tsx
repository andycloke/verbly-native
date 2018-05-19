import * as React from 'react';
import { List, ListItem, Body, Right, Text, Radio } from 'native-base';
import { PEOPLE_MAP } from '../../../../../core/constants/people';
import { Props } from '../../../../../core/features/menu/features/people/containers/PeopleMenu';
import ListRadioItem from '../../../../common/components/ListRadioItem';

const PeopleMenu = ({ inPlay, togglePersonInPlay }: Props) => {
  const makeClickHandler = (person: string) => (event: any): any =>
    togglePersonInPlay(person);
  return (
    <List>
      {Object.keys(inPlay).map(person => (
        <ListRadioItem
          key={person}
          primaryText={PEOPLE_MAP[person].join(', ')}
          onPress={makeClickHandler(person)}
          selected={inPlay[person]}
        />
      ))}
    </List>
  );
};

export default PeopleMenu;
