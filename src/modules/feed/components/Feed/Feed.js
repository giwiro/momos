// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, FlatList, Text, Button} from 'react-native';

import feedStyle from './Feed.style';
import Post from '../Post/Post';

/*type Post = {
  title: string;
};*/

type Props = {
  posts: any[],
  isFetching?: boolean,
  fetchPosts: () => void,
};

export default function Feed(props: Props) {
  const {posts, isFetching, fetchPosts} = props;
  console.log('fetchPosts', fetchPosts);
  return (
    <SafeAreaView style={feedStyle.container}>
      <FlatList
        data={posts}
        renderItem={(post: Post) => <Text>{post.slug}</Text>}
      />
      <Button title="hola" onPress={() => fetchPosts()} />
    </SafeAreaView>
  );
}

Feed.propTypes = {
  posts: PropTypes.array,
  isFetching: PropTypes.bool,
  fetchPosts: PropTypes.func.isRequired,
};
