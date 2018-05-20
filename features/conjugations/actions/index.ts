import { receiveConjugations } from '../../../core/features/conjugations/actions';
import conjugations from '../../../data/conjugations.json';

export const actionTypes = {
  PUT_CONJUGATIONS_IN_STORE: 'conjugations/PUT_CONJUGATIONS_IN_STORE'
};

export const putConjugationsInStore = () => {
  return function(dispatch: any, getState: any) {
    dispatch(receiveConjugations(conjugations));
  };
};
