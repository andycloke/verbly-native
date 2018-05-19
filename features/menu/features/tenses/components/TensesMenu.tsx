import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { DISPLAY_TEXT } from '~/core/constants/tenses';
import { Props } from '~/core/features/menu/features/tenses/containers/TensesMenu';


const TensesMenu = ({ inPlay, toggleTenseInPlay }: Props) => {
    const makeClickHandler = (tense: string) => (
      event: React.MouseEvent<HTMLElement>
    ): any => toggleTenseInPlay(tense);
    return (
      <div className="TensesMenu__outer">
        <View style={{ padding: 0 }}>
          <Text>Tenses</Text>
          {Object.keys(inPlay).map(key => {
            return (
              <ListItem
                key={key}
                primaryText={DISPLAY_TEXT[key].text}
                secondaryText={DISPLAY_TEXT[key].example}
                leftIcon={checkBox}
                onClick={makeClickHandler(key)}
              />
            );
          })}
        </List>
      </div>
    );
  };
  
  export default TensesMenu;