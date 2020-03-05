// @flow
import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomText, {
  FONT_TYPES,
} from '../../../../elements/CustomText/CustomText';

import postStyle from './Post.style';
import defaultAvatar from '../../../../assets/images/default_avatar.png';

import type {Post as PostType} from '../../../../entities';

type Props = {
  post: PostType,
};

const DEFAULT_USER_NAME = 'Anonymous';

function Avatar({
  imageLoaded,
  setImageLoaded,
  post,
}: {
  imageLoaded: boolean,
  setImageLoaded: (value: boolean) => void,
  post: PostType,
}) {
  if (post.user) {
    return (
      <FastImage
        style={postStyle.avatarImage}
        source={{
          uri: post.user.avatar_url,
          priority: FastImage.priority.normal,
        }}
        onLoadEnd={() => setImageLoaded(true)}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  } else {
    return <Image style={postStyle.avatarImage} source={defaultAvatar} />;
  }
}

function Post(props: Props) {
  const {post} = props;
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <View style={postStyle.container}>
      {post.user && (
        <Avatar
          post={post}
          imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}
        />
      )}
      <View>
        <CustomText type={FONT_TYPES.SUBTITLE2}>
          {post.user ? post.user.display_name : DEFAULT_USER_NAME}
        </CustomText>
      </View>
    </View>
  );
}

Post.propTypes = {
  text: PropTypes.string,
};

export default memo<Props>(Post);
