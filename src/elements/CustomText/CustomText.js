// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {Text, Platform} from 'react-native';

import type {Node} from 'react';

type Props = {|
  children: Node,
  style?: {[key: string]: string},
  type: $Keys<typeof FONT_TYPES>,
|};

export const FONT_TYPES = {
  HEADLINE1: 'HEADLINE1',
  HEADLINE2: 'HEADLINE2',
  HEADLINE3: 'HEADLINE3',
  HEADLINE4: 'HEADLINE4',
  HEADLINE5: 'HEADLINE5',
  HEADLINE6: 'HEADLINE6',
  SUBTITLE1: 'SUBTITLE1',
  SUBTITLE2: 'SUBTITLE2',
  BODY1: 'BODY1',
  BODY2: 'BODY2',
  BUTTON: 'BUTTON',
  CAPTION: 'CAPTION',
  OVERLINE: 'OVERLINE',
};

const OPEN_SANS_TYPE_STYLE = Object.freeze({
  HEADLINE1: {
    fontSize: 95,
    letterSpacing: -1.5,
    fontFamily: 'OpenSans-Light',
    color: '#5831DF',
  },
  HEADLINE2: {
    fontSize: 59,
    letterSpacing: -0.5,
    fontFamily: 'OpenSans-Light',
    color: '#5831DF',
  },
  HEADLINE3: {
    fontSize: 48,
    letterSpacing: 0,
    fontFamily: 'OpenSans-Regular',
    color: '#5831DF',
  },
  HEADLINE4: {
    fontSize: 34,
    letterSpacing: 0.25,
    fontFamily: 'OpenSans-Regular',
    color: '#5831DF',
  },
  HEADLINE5: {
    fontSize: 24,
    letterSpacing: 0,
    fontFamily: 'OpenSans-Regular',
    color: '#5831DF',
  },
  HEADLINE6: {
    fontSize: 20,
    letterSpacing: 0.15,
    fontFamily: 'OpenSans-SemiBold',
    color: '#5831DF',
  },
  SUBTITLE1: {
    fontSize: 16,
    letterSpacing: 0.15,
    fontFamily: 'OpenSans-Regular',
    color: '#5831DF',
  },
  SUBTITLE2: {
    fontSize: 14,
    letterSpacing: 0.1,
    fontFamily: 'OpenSans-SemiBold',
    color: '#5831DF',
  },
  BODY1: {
    fontSize: 16,
    letterSpacing: 0.5,
    fontFamily: 'OpenSans-Regular',
    color: '#5831DF',
  },
  BODY2: {
    fontSize: 14,
    letterSpacing: 0.25,
    fontFamily: 'OpenSans-Regular',
    color: '#5831DF',
  },
  BUTTON: {
    fontSize: 14,
    letterSpacing: 1.25,
    fontFamily: 'OpenSans-SemiBold',
    color: '#FFFFFFFF',
  },
  CAPTION: {
    fontSize: 12,
    letterSpacing: 0.4,
    fontFamily: 'OpenSans-Regular',
    color: '#9D82FA',
  },
  OVERLINE: {
    fontSize: 10,
    letterSpacing: 1.5,
    fontFamily: 'OpenSans-Regular',
    color: '#9D82FA',
  },
});

const SAN_FRANCISCO_TYPE_STYLE = Object.freeze({
  HEADLINE1: {
    fontSize: 95,
    // letterSpacing: -1.5,
    fontFamily: 'System',
    fontWeight: '300',
    color: '#5831DF',
  },
  HEADLINE2: {
    fontSize: 59,
    // letterSpacing: -0.5,
    fontFamily: 'System',
    fontWeight: '300',
    color: '#5831DF',
  },
  HEADLINE3: {
    fontSize: 48,
    // letterSpacing: 0,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#5831DF',
  },
  HEADLINE4: {
    fontSize: 34,
    // letterSpacing: 0.25,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#5831DF',
  },
  HEADLINE5: {
    fontSize: 24,
    // letterSpacing: 0,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#5831DF',
  },
  HEADLINE6: {
    fontSize: 20,
    // letterSpacing: 0.15,
    fontWeight: '500',
    fontFamily: 'System',
    color: '#5831DF',
  },
  SUBTITLE1: {
    fontSize: 16,
    // letterSpacing: 0.15,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#5831DF',
  },
  SUBTITLE2: {
    fontSize: 14,
    // letterSpacing: 0.1,
    fontWeight: '500',
    fontFamily: 'System',
    color: '#5831DF',
  },
  BODY1: {
    fontSize: 16,
    // letterSpacing: 0.5,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#5831DF',
  },
  BODY2: {
    fontSize: 14,
    // letterSpacing: 0.25,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#5831DF',
  },
  BUTTON: {
    fontSize: 14,
    // letterSpacing: 1.25,
    fontWeight: '500',
    fontFamily: 'System',
    color: '#FFFFFFFF',
  },
  CAPTION: {
    fontSize: 12,
    // letterSpacing: 0.4,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#9D82FA',
  },
  OVERLINE: {
    fontSize: 10,
    // letterSpacing: 1.5,
    fontWeight: '400',
    fontFamily: 'System',
    color: '#9D82FA',
  },
});

export default function CustomText(props: Props) {
  const {style = {}, type} = props;
  let typeStyle = OPEN_SANS_TYPE_STYLE[type];
  if (Platform.OS === 'ios') {
    typeStyle = SAN_FRANCISCO_TYPE_STYLE[type];
  }
  return <Text style={{...style, ...(typeStyle: any)}}>{props.children}</Text>;
}

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
};
