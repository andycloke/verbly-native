import * as React from 'react';
import { Content } from 'native-base';

import { Props } from '../../../core/features/game/containers/GameContainer';
import { pathToHome } from '../../../core/paths';

import Game from '../containers/Game';
import Review from '../containers/Review';
import ProgressBar from '../containers/ProgressBar';

import GameHeader from './GameHeader';

const GameContainer = ({ reviewOpen }: Props) => {
  return (
    <React.Fragment>
      <GameHeader />
      <Content>
        <ProgressBar />
        {reviewOpen ? <Review /> : <Game />}
      </Content>
    </React.Fragment>
  );
};

export default GameContainer;
