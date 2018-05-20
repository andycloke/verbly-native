import * as React from 'react';
import { connect } from 'react-redux';
import { putConjugationsInStore } from '../actions';

type Props = {
  putConjugationsInStore: () => void;
};

class ReceiveConjugationsWrapper extends React.PureComponent<Props> {
  componentWillMount() {
    this.props.putConjugationsInStore();
  }
  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = (dispatch: any): Props => ({
  putConjugationsInStore: () => dispatch(putConjugationsInStore())
});

export default connect(null, mapDispatchToProps)(
  ReceiveConjugationsWrapper as any
);
