import * as React from 'react';
import { View } from 'react-native';
import { Props } from '../../../core/features/game/containers/GameContainer';
import Game from '../containers/Game';
import Review from '../containers/Review';
import ProgressBar from '../containers/ProgressBar';

const GameContainer = ({ reviewOpen }: Props) => {
  return (
    <View>
      <ProgressBar />
      {reviewOpen ? <Review /> : <Game />}
    </View>
  );
};

export default GameContainer;
