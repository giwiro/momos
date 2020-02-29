// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import postStyle from './Post.style';

type Props = {
  text: string,
};

export default function Post(props: Props) {
  const {text} = props;
  return (
    <View style={postStyle.container}>
      <Text>{text}</Text>
    </View>
  );
}

Post.propTypes = {
  text: PropTypes.string,
};
