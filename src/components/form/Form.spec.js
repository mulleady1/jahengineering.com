import {assert} from 'chai';
import {mount} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import Form from './Form';

describe('Form', () => {

  let wrapper,
      stateSpy;

  const name = 'My Name';
  const email = 'my.email@email.com';
  const message = 'My message.';

  const props = {
    title: 'Test Form',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Name',
        value: ''
      },
      {
        type: 'text',
        name: 'email',
        placeholder: 'Email',
        value: ''
      },
      {
        type: 'textarea',
        name: 'message',
        placeholder: 'Message',
        value: ''
      }
    ],
    onSubmit: sinon.spy()
  };

  before(() => {
    stateSpy = sinon.spy(Form.prototype, 'setState');
    wrapper = mount(<Form {...props} />);
  });

  after(() => {
    Form.prototype.setState.restore();
  });
  
  it('should render the title', () => {
    assert.equal(wrapper.find('h2').text(), props.title);
  });
	
  it('should render 3 form inputs', () => {
    assert.lengthOf(wrapper.find('input[type="text"]'), 2);
    assert.lengthOf(wrapper.find('textarea'), 1);
  });
  
  it('should update the state when entering data', () => {
    wrapper.find('input[type="text"]').at(0).simulate('change', { target: { value: name }});
    assert.equal(stateSpy.lastCall.args[0].name, name);
    wrapper.find('input[type="text"]').at(1).simulate('change', { target: { value: email }});
    assert.equal(stateSpy.lastCall.args[0].email, email);
    wrapper.find('textarea').simulate('change', { target: { value: message }});
    assert.equal(stateSpy.lastCall.args[0].message, message);
  });
  
  describe('onSubmit()', () => {

    let data;

    before(() => {
      wrapper.find('Button').simulate('click');
      data = props.onSubmit.lastCall.args[0];
    });
    
    it('should get called when clicking Submit', () => {
      assert.isTrue(props.onSubmit.called);
    });

    it('should get called with updated name, email, and message values', () => {
      assert.equal(data.name, name);
      assert.equal(data.email, email);
      assert.equal(data.message, message);
    });

  });
  
});
