import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Gif from './Gif';

configure({
  adapter: new Adapter(),
});

describe('<Gif />', () => {
  let wrapper;
  const gif = {
    gif_url: 'gif_url',
    title: 'title',
  };
  beforeEach(() => {
    wrapper = shallow(<Gif />);
  });
  it('should be defined <Gif />', () => {
    wrapper.setProps(gif);
    expect(wrapper).toBeDefined();
  });
});
