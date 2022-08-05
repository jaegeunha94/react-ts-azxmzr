import { describe, it } from 'node:test';
import * as React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';

describe('test', () => {
  it('test', () => {
    const divFinder = shallow(<Home />);

    expect(divFinder.find('div').exists()).toBe(true);
  });
});
