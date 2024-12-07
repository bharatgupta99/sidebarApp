import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import BottomBar from './bottomBar';


const BottomTabs = createBottomTabNavigator({
  tabBar: props => <BottomBar {...props} />,
  screens: {
    Home: Home,
    Contact: Contact,
  },
  screenOptions: {
    headerShown: false,
  },
});

export default BottomTabs;
