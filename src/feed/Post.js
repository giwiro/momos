// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

import PostStyle from './Post.style';

type Props = {
  text: string,
};

export default class Post extends Component<Props> {
  render() {
    const {text} = this.props;
    return (
      <View style={PostStyle.container}>
        <Text>{text}</Text>
      </View>
    );
  }
}

Post.propTypes = {
  text: PropTypes.string,
};