// @flow
import React, {memo, useState} from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import CustomText, {
  FONT_TYPES,
  FONT_WEIGHTS,
} from '../../../../elements/CustomText/CustomText';

import postStyle from './Post.style';
import defaultAvatar from '../../../../../assets/images/default_avatar.png';

import type {Post as PostType} from '../../../../entities';

type Props = {
  post: PostType,
};

const DEFAULT_USER_NAME = 'Anonymous';

function Avatar({post}: {post: PostType}) {
  if (post.user) {
    return (
      <FastImage
        style={postStyle.avatarImage}
        source={{
          uri: post.user.avatar_url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  } else {
    return <Image style={postStyle.avatarImage} source={defaultAvatar} />;
  }
}

function Post(props: Props) {
  const {post} = props;
  // const [imageLoaded, setImageLoaded] = useState(false);
  const postHeight =
    post.images.preview_gif &&
    !isNaN(parseInt(post.images.preview_gif.height, 10))
      ? parseInt(post.images.preview_gif.height, 10)
      : 250;
  const mainImageStyle = {...postStyle.mainImage};
  if (typeof postHeight === 'number') {
    mainImageStyle.height = postHeight;
  }
  return (
    <View style={postStyle.container}>
      <View style={postStyle.topContainer}>
        <Avatar
          post={post}
          /*imageLoaded={imageLoaded}
          setImageLoaded={setImageLoaded}*/
        />
        <View>
          <CustomText type={FONT_TYPES.SUBTITLE2}>
            {post.user ? post.user.display_name : DEFAULT_USER_NAME}
          </CustomText>
          <CustomText type={FONT_TYPES.CAPTION} style={postStyle.timeAgoText}>
            {moment(post.trending_datetime).fromNow()}
          </CustomText>
        </View>
      </View>
      <View style={postStyle.titleContainer}>
        <CustomText type={FONT_TYPES.HEADLINE6} weight={FONT_WEIGHTS.BOLD}>
          {post.title}
        </CustomText>
      </View>

      <View style={postStyle.mainContainer}>
        <FastImage
          style={mainImageStyle}
          source={{
            uri: post.images.preview_gif.url,
            priority: FastImage.priority.high,
          }}
        />
      </View>
    </View>
  );
}

Post.propTypes = {
  text: PropTypes.string,
};

export default memo<Props>(Post);
