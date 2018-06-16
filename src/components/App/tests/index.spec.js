/*eslint-disable*/
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from 'react-redux';
import App from '../index';
import store from '../../../store';

test('Should render a Hello World', () => {
    const wrapper = mount(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(wrapper.find('div')).to.have.length(1);
});