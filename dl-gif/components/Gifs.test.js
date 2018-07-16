import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  Gifs,
  LoadingComponent,
} from './Gifs';
import Gif from './Gif';

configure({
  adapter: new Adapter(),
});

describe('<Gifs />', () => {
  let wrapper;
  const initialState = {
    gifsList: [{
      images: {
        preview_gif: {
          url: 'gif_url',
        },
      },
      title: 'title',
      url: 'url',
      id: '1',
    }],
  };
  beforeEach(() => {
    wrapper = shallow(<Gifs />);
  });

  it('should be render <Gif /> if we have a gif list', () => {
    initialState.gifsList[0].loading = false;
    wrapper.setProps(initialState);
    expect(wrapper.find(Gif)).toHaveLength(1);
  });

  it('should be render <LoadingComponent /> if is loading content', () => {
    initialState.loading = true;
    wrapper.setProps(initialState);
    expect(wrapper.find(LoadingComponent)).toHaveLength(1);
  });
});
