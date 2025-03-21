/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @oncall react_native
 */

const React = require('react');
const LogBoxButton = require('../LogBoxButton').default;
const render = require('../../../../jest/renderer');
import Text from '../../../Text/Text';

describe('LogBoxButton', () => {
  it('should render only a view without an onPress', () => {
    const output = render.shallowRender(
      <LogBoxButton
        backgroundColor={{
          default: 'black',
          pressed: 'red',
        }}>
        <Text>Press me</Text>
      </LogBoxButton>,
    );

    expect(output).toMatchSnapshot();
  });

  it('should render TouchableWithoutFeedback and pass through props', () => {
    const output = render.shallowRender(
      <LogBoxButton
        backgroundColor={{
          default: 'black',
          pressed: 'red',
        }}
        hitSlop={{}}
        onPress={() => {}}>
        <Text>Press me</Text>
      </LogBoxButton>,
    );

    expect(output).toMatchSnapshot();
  });
});
