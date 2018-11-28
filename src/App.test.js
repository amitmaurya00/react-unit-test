import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('A suite', function() {
  it('should render without throwing an error', function() {
    shallow(<App />)
  });
});