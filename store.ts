import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import stats from './core/features/stats/reducers';
import scores from './core/features/scores/reducers';
import game from './core/features/game/reducers';
import tensesInPlay from './core/features/menu/features/tenses/reducers';
import peopleInPlay from './core/features/menu/features/people/reducers';
import verbsInPlay from './core/features/menu/features/verbs/reducers';
import options from './core/features/options/reducers';
import conjugations from './core/features/conjugations/reducers';

const reducer = combineReducers({
  options,
  peopleInPlay,
  tensesInPlay,
  verbsInPlay,
  game,
  conjugations,
  stats,
  scores
});

export default createStore(reducer, applyMiddleware(thunk));
