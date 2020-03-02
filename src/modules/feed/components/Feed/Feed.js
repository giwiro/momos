// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, Text, Button} from 'react-native';

import feedStyle from './Feed.style';

import type {Post} from '../../../../entities';

type Props = {
  posts: any[],
  isFetching?: boolean,
  feedFetchPosts: () => void,
};

export default function Feed(props: Props) {
  const {posts = [], feedFetchPosts} = props;
  return (
    <SafeAreaView style={feedStyle.container}>
      <FlatList
        data={posts}
        renderItem={({item}: {item: Post}) => <Text>{item.slug}</Text>}
        keyExtractor={(post: Post) => post.id}
      />
      <Button title="hola" onPress={() => feedFetchPosts()} />
    </SafeAreaView>
  );
}

Feed.propTypes = {
  posts: PropTypes.array,
  isFetching: PropTypes.bool,
  feedFetchPosts: PropTypes.func.isRequired,
};
