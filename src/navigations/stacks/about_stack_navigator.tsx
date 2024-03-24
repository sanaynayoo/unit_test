import React from 'react';
import {View, Text} from 'react-native';

import {AppStack} from './all_stack';
import AboutScreen from '../../screens/about/About';

const AboutStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="About" component={AboutScreen} />
    </AppStack.Navigator>
  );
};

export default AboutStackNavigator;
