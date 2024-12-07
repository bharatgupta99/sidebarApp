import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/customDrawer';
import {Dimensions} from 'react-native';
import MyTabs from './bottom';
import COLORS from '../constants/colors';

const {width} = Dimensions.get('screen');

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: {
          width: (7 / 15) * width,
          overflow: 'hidden',
        },
        sceneStyle: {
          backgroundColor: COLORS.white,
        },
        drawerType: 'front',
      }}>
      <Drawer.Screen name="BottomTabBar" component={MyTabs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
