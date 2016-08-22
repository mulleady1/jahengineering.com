import {assert} from 'chai';
import {shallow} from 'enzyme';
import React from 'react';
import {App} from './App';

describe('Test the root App component', () => {

  it('should render the app', () => {
    const wrapper = shallow(<App />);
    assert.isOk(wrapper.html());
  });
	
});
