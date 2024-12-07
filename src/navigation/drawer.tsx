import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './bottom';
import CustomDrawer from '../components/customDrawer';
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
    drawerStyle: {
      width: (7 / 15) * width,
      backgroundColor: '#192841',
    },
    drawerContentContainerStyle: {
      backgroundColor: 'white',
    },
    sceneStyle: {
      backgroundColor: '#192841',
    },
    headerShown: false,
    drawerType: 'front',
  },
  drawerContent: props => <CustomDrawer {...props} />,
});

export default Drawer;
