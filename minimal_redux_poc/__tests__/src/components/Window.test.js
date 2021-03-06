import React from 'react';
import { shallow } from 'enzyme';
import { actions, store } from '../../../src/store';
import Window from '../../../src/components/Window';
import fixture from '../../fixtures/2.json';

describe('Window', () => {
  let wrapper;
  let window;
  beforeEach(() => {
    store.dispatch(actions.receiveManifest('foo', fixture));
    store.dispatch(actions.addWindow({ manifestId: 'foo' }));
    [window] = store.getState().windows;
    wrapper = shallow(<Window store={store} id={window.id} />).dive();
  });

  it('renders without an error', () => {
    expect(wrapper.find('div.mirador-window').length).toBe(1);
    expect(wrapper.find('div.mirador-window').text()).toBe(window.id);
  });
});
