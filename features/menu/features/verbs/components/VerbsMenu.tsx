import * as React from 'react';
import * as ReactNative from 'react-native';
import { List, ListItem, Body, Right, Text, Radio, Input } from 'native-base';
import {
  VerbsIncludedOptions,
  WhichVerbsOptions
} from '../../../../../core/features/menu/features/verbs/models';
import { VerbEndingOptions } from '../../../../../core/features/menu/features/verbs/models/endings';
import { Props } from '../../../../../core/features/menu/features/verbs/containers/VerbsMenu';
import ListRadioItem from '../../../../common/components/ListRadioItem';

type State = {
  whichVerbsInputValue: string;
};

export default class VerbsMenu extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      whichVerbsInputValue: props.userDefinedVerbs.join(', ')
    };
  }
  input: any; // TODO - blur input when other which verbs option selected

  handleChange = (value: string): void => {
    this.setState({ whichVerbsInputValue: value });
    this.props.updateUserDefinedVerbs(
      value.split(',').map(verb => verb.trim().toLowerCase())
    );
  };

  makeReflexiveClickHandler = (option: string) => (event: any): any =>
    this.props.setReflexiveVerbsInPlay(option);

  makeIrregularClickHandler = (option: string) => (event: any): any =>
    this.props.setIrregularVerbsInPlay(option);

  makeWhichVerbsClickHandler = (option: string) => (event: any): any =>
    this.props.setWhichVerbsInPlay(option);

  setWhichVerbsInPlayToUserDefined: any = () =>
    this.props.setWhichVerbsInPlay(WhichVerbsOptions.UserDefined);

  makeEndingClickHandler = (ending: string) => (event: any): any =>
    this.props.toggleVerbEndingInPlay(ending);

  render() {
    const {
      reflexive,
      irregular,
      whichVerbs,
      erVerbsInPlay,
      arVerbsInPlay,
      irVerbsInPlay
    } = this.props;
    return (
      <List>
        <ListItem first itemHeader>
          <Text>Reflexive</Text>
        </ListItem>
        <ListRadioItem
          primaryText="Include"
          onPress={this.makeReflexiveClickHandler(VerbsIncludedOptions.Include)}
          selected={reflexive === VerbsIncludedOptions.Include}
        />
        <ListRadioItem
          primaryText="Exclude"
          onPress={this.makeReflexiveClickHandler(VerbsIncludedOptions.Exclude)}
          selected={reflexive === VerbsIncludedOptions.Exclude}
        />
        <ListRadioItem
          primaryText="Only"
          onPress={this.makeReflexiveClickHandler(VerbsIncludedOptions.Only)}
          selected={reflexive === VerbsIncludedOptions.Only}
        />
        <ListItem itemHeader>
          <Text>Irregular</Text>
        </ListItem>
        <ListRadioItem
          primaryText="Include"
          onPress={this.makeIrregularClickHandler(VerbsIncludedOptions.Include)}
          selected={irregular === VerbsIncludedOptions.Include}
        />
        <ListRadioItem
          primaryText="Exclude"
          onPress={this.makeIrregularClickHandler(VerbsIncludedOptions.Exclude)}
          selected={irregular === VerbsIncludedOptions.Exclude}
        />
        <ListRadioItem
          primaryText="Only"
          onPress={this.makeIrregularClickHandler(VerbsIncludedOptions.Only)}
          selected={irregular === VerbsIncludedOptions.Only}
        />
        <ListItem itemHeader>
          <Text>Which Verbs</Text>
        </ListItem>
        <ListRadioItem
          primaryText="All"
          onPress={this.makeWhichVerbsClickHandler(WhichVerbsOptions.All)}
          selected={whichVerbs === WhichVerbsOptions.All}
        />
        <ListRadioItem
          primaryText="Common"
          onPress={this.makeWhichVerbsClickHandler(WhichVerbsOptions.Common)}
          selected={whichVerbs === WhichVerbsOptions.Common}
        />
        <ListItem onPress={this.setWhichVerbsInPlayToUserDefined}>
          <Body>
            <Text>Choose:</Text>
            <Input
              onChangeText={this.handleChange}
              onFocus={this.setWhichVerbsInPlayToUserDefined}
            />
          </Body>
          <Right>
            <Radio selected={whichVerbs === WhichVerbsOptions.UserDefined} />
          </Right>
        </ListItem>
        <ListItem itemHeader>
          <Text>Endings</Text>
        </ListItem>
        <ListRadioItem
          primaryText="-ar"
          onPress={this.makeEndingClickHandler(VerbEndingOptions.Ar)}
          selected={arVerbsInPlay}
        />
        <ListRadioItem
          primaryText="-er"
          onPress={this.makeEndingClickHandler(VerbEndingOptions.Er)}
          selected={erVerbsInPlay}
        />
        <ListRadioItem
          primaryText="-ir"
          onPress={this.makeEndingClickHandler(VerbEndingOptions.Ir)}
          selected={irVerbsInPlay}
          last
        />
      </List>
    );
  }
}
