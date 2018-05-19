import * as React from 'react';
import { Container, List, ListItem, Text, CheckBox } from 'native-base';
import { PEOPLE_MAP } from '../../../../../core/constants/people';
import { Props } from '../../../../../core/features/menu/features/people/containers/PeopleMenu';

const PeopleMenu = ({ inPlay, togglePersonInPlay }: Props) => {
  const makeClickHandler = (person: string) => (event: any): any =>
    togglePersonInPlay(person);
  return (
    <Container>
      <ListItem itemHeader first>
        <Text>People</Text>
      </ListItem>
      <List style={{ padding: 0 }}>
        {Object.keys(inPlay).map(key => (
          <ListItem key={key} onPress={makeClickHandler(key)}>
            <Text>{PEOPLE_MAP[key].join(', ')}</Text>
            <CheckBox checked={inPlay[key]} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PeopleMenu;
