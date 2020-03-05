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

export const FONT_WEIGHTS = Object.freeze({
  BOLD: 'bold',
  NORMAL: 'normal',
});

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
  },
  HEADLINE2: {
    fontSize: 59,
    letterSpacing: -0.5,
  },
  HEADLINE3: {
    fontSize: 48,
    letterSpacing: 0,
  },
  HEADLINE4: {
    fontSize: 34,
    letterSpacing: 0.25,
  },
  HEADLINE5: {
    fontSize: 24,
    letterSpacing: 0,
  },
  HEADLINE6: {
    fontSize: 20,
    letterSpacing: 0.15,
  },
  SUBTITLE1: {
    fontSize: 16,
    letterSpacing: 0.15,
  },
  SUBTITLE2: {
    fontSize: 14,
    letterSpacing: 0.1,
  },
  BODY1: {
    fontSize: 16,
    letterSpacing: 0.5,
  },
  BODY2: {
    fontSize: 14,
    letterSpacing: 0.25,
  },
  BUTTON: {
    fontSize: 14,
    letterSpacing: 1.25,
  },
  CAPTION: {
    fontSize: 12,
    letterSpacing: 0.4,
  },
  OVERLINE: {
    fontSize: 10,
    letterSpacing: 1.5,
  },
});

export default function CustomText(props: Props) {
  const {style = {}, type} = props;
  const typeStyle = OPEN_SANS_TYPE_STYLE[type];
  let fontFamily = 'OpenSans';
  if (Platform.OS === 'ios') {
    fontFamily = 'System';
  }
  return (
    <Text style={{...style, ...typeStyle, fontFamily}}>{props.children}</Text>
  );
}

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  type: PropTypes.string.isRequired,
};
