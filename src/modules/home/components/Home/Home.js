// @flow
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import {StackActions} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText, {
  FONT_TYPES,
} from '../../../../elements/CustomText/CustomText';

import homeStyle from './Home.style';
import logo from '../../../../../assets/images/logo.png';
import bgVideo from '../../../../../assets/videos/Ski-Day.mp4';

import type {NavigationProp} from '@react-navigation/core';

type Props = {
  firstTime: boolean,
  userUseFirstTime: () => void,
  navigation: NavigationProp,
};

export default function Home(props: Props) {
  const {firstTime, userUseFirstTime, navigation} = props;
  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    if (!firstTime) {
      navigation.dispatch(StackActions.replace('Feed'));
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView style={homeStyle.container}>
      <View style={homeStyle.backgroundVideoContainer}>
        <View style={homeStyle.backgroundTint} />
        <Video
          source={bgVideo}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
          style={homeStyle.backgroundVideo}
        />
      </View>
      <View style={homeStyle.topContainer}>
        <Image style={homeStyle.logo} source={logo} resizeMode="stretch" />
      </View>
      <Animated.View style={{...homeStyle.buttonContainer, opacity: fadeAnim}}>
        <TouchableOpacity
          style={homeStyle.button}
          activeOpacity={0.5}
          onPress={() => {
            userUseFirstTime();
            navigation.dispatch(StackActions.replace('Feed'));
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#5323E2', '#A169FE']}
            style={homeStyle.linearGradient}>
            <CustomText type={FONT_TYPES.BUTTON}>I WANT FUN</CustomText>
          </LinearGradient>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

Home.propTypes = {
  firstTime: PropTypes.bool.isRequired,
  userUseFirstTime: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};
