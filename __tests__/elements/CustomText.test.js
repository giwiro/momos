// @flow
import 'react-native';
import React from 'react';
import {Platform} from 'react-native';
import renderer from 'react-test-renderer';

import CustomText, {
  FONT_WEIGHTS,
  FONT_TYPES,
} from '../../src/elements/CustomText/CustomText';

const textSample = 'This is a text sample';

beforeEach(() => {
  jest.resetModules();
});

it('should return all font weights', () =>
  expect(FONT_WEIGHTS).toMatchSnapshot());

it('should return all font types', () => expect(FONT_TYPES).toMatchSnapshot());

['ios', 'android'].forEach((os: string) =>
  Object.keys(FONT_WEIGHTS).forEach((fontWeight: $Keys<typeof FONT_WEIGHTS>) =>
    Object.keys(FONT_TYPES).forEach((fontType: $Keys<typeof FONT_TYPES>) => {
      Platform.os = os;
      it(`Should render correctly ${fontType} with ${fontWeight} on ${os}`, () => {
        const tree = renderer
          .create(
            <CustomText type={fontType} weight={fontWeight}>
              {textSample}
            </CustomText>,
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    }),
  ),
);
