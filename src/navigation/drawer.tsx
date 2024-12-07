import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './bottom';
import CustomDrawer from './customDrawer';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

const Drawer = createDrawerNavigator({
  screens: {
    BottomTabBar: {
      screen: BottomTabs,
    },
  },
  screenOptions: {
    overlayColor: 'transparent',
    drawerStyle: {width: width / 3, backgroundColor: '#242424'},
    sceneStyle: {
      backgroundColor: '#242424',
    },
    headerShown: false,
    drawerType: 'front',
  },
  drawerContent: props => <CustomDrawer {...props} />,
});

export default Drawer;
