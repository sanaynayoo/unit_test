import React from 'react';
import {AppStack} from './all_stack';

import LoginScreen from '../../screens/auth/Login';

const auth_stack_navigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <AppStack.Screen name="Login" component={LoginScreen} />
    </AppStack.Navigator>
  );
};

export default auth_stack_navigator;
