import 'react-native';
import React from 'react';

import App from '../App';
import About from '../src/screens/about/About';
import Login from '../src/screens/auth/Login';
import Home from '../src/screens/home/Home';

// render must be required
import {create} from 'react-test-renderer';

const appTree = create(<App />);
const AboutTree = create(<About />);
const LoginTree = create(<Login />);
const HomeTree = create(<Home />);

it('render correctly', () => {
  expect(appTree).toMatchSnapshot();
  expect(AboutTree).toMatchSnapshot();
  expect(LoginTree).toMatchSnapshot();
  expect(HomeTree).toMatchSnapshot();
});
