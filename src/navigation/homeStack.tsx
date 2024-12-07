import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Screen1 from '../screens/Screen1';

export const SCREENS = {
  Home: 'Home',
  Screen1: 'Screen1',
};

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.Home} component={Home} />
      <Stack.Screen name={SCREENS.Screen1} component={Screen1} />
    </Stack.Navigator>
  );
};

export default HomeStack;
