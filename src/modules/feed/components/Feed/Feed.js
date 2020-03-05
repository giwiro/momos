// @flow
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  RefreshControl,
} from 'react-native';
import Post from '../Post/Post';
import {NUM_POSTS_LIMIT} from '../../duck';

import feedStyle from './Feed.style';

import type {Post as PostType} from '../../../../entities';

type Props = {
  posts: PostType[],
  isFetching?: boolean,
  isFetchingFromTop?: boolean,
  feedFetchPosts: ({fetchFromTop: boolean}) => void,
};

export default function Feed(props: Props) {
  const {posts = [], isFetching, isFetchingFromTop, feedFetchPosts} = props;
  const secureFetchPosts = (fetchFromTop: boolean) => {
    if (!isFetching) {
      if (fetchFromTop || (!fetchFromTop && posts.length < NUM_POSTS_LIMIT)) {
        feedFetchPosts({fetchFromTop});
      }
    }
  };
  useEffect(() => {
    if (posts.length === 0) {
      secureFetchPosts(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={feedStyle.container}>
      <FlatList
        data={posts}
        renderItem={({item}: {item: PostType}) => <Post post={item} />}
        keyExtractor={(post: PostType) => post.id}
        numColumns={2}
        ItemSeparatorComponent={() => (
          <View style={feedStyle.separatorContainer} />
        )}
        refreshControl={
          posts.length && (
            <RefreshControl
              refreshing={isFetching && isFetchingFromTop}
              onRefresh={() => secureFetchPosts(true)}
            />
          )
        }
        onEndReachedThreshold={0.2}
        onEndReached={() => secureFetchPosts(false)}
        ListFooterComponent={() =>
          posts.length && isFetching ? (
            <View>
              <ActivityIndicator size="small" color="#0000ff" />
            </View>
          ) : null
        }
      />
      {posts.length === 0 && isFetching && (
        <View style={feedStyle.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </SafeAreaView>
  );
}

Feed.propTypes = {
  posts: PropTypes.array,
  isFetching: PropTypes.bool,
  isFetchingFromTop: PropTypes.bool,
  feedFetchPosts: PropTypes.func.isRequired,
};
