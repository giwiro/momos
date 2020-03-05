// @flow
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Feed from '../components/Feed/Feed';
import {actions as FeedActions} from '../duck';

import type {RootState} from '../../index';
import type {Dispatch} from 'redux';

export default connect<*, *, *, *, *, *>(
  (state: RootState) => ({
    isFetching: state.feed.isFetching,
    isFetchingFromTop: state.feed.isFetchingFromTop,
    posts: state.feed.posts.toList().toJS(),
  }),
  (dispatch: Dispatch<any>) =>
    bindActionCreators(
      {
        ...FeedActions,
      },
      dispatch,
    ),
)(Feed);
