import React from 'react';
import {View, Text} from 'react-native';

import {AppStack} from './all_stack';
import HomeScreen from '../../screens/home/Home';

const HomeStackNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
};

export default HomeStackNavigator;
