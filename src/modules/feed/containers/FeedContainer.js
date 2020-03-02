// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Feed from '../components/Feed/Feed';
import {actions as FeedActions} from '../duck';

console.log('FeedActions', FeedActions);

import type {RootState} from '../../index';
import type {Dispatch} from 'redux';

function mapStateToProps(state: RootState) {
  return {
    isFetching: state.feed.isFetching,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  const binded = bindActionCreators(
    {
      ...FeedActions,
    },
    dispatch,
  );
  console.log('binded', binded);
  return binded;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Feed);
