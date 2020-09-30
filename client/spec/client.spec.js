import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App.jsx';
import ReviewList from '../components/ReviewList.jsx';

//enzyme
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });




describe('React Client Component Testing', () => {
  const container = shallow(<App/>);

  it('sanity check', () => {
    expect(true).toBe(true)
  })

  it('The App Component Renders to the DOM', () => {
    expect(container.html()).toMatchSnapshot();
  })

})