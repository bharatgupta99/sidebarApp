import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/customDrawer';
import {Dimensions} from 'react-native';
import MyTabs from './bottom';

const {width} = Dimensions.get('screen');

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
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
      }}>
      <Drawer.Screen name="BottomTabBar" component={MyTabs} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
