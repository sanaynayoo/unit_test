import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// // import file
// import {AppStack} from './stacks/all_stack';

// Screens
import AuthStack from './stacks/auth_stack_navigator';
import HomeStackNavigator from './stacks/home_stack_navigator';
import AboutStackNavigator from './stacks/about_stack_navigator';

const AppNavigator = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <NavigationContainer>
      {isAuth ? <HomeStackNavigator /> : <AuthStack />}
      {/* <AboutStackNavigator /> */}
    </NavigationContainer>
  );
};

export default AppNavigator;
