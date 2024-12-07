import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contact from '../screens/Contact';
import BottomBar from '../components/bottomBar';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import {Dimensions, StyleSheet} from 'react-native';
import HomeStack from './homeStack';

const {width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: interpolate(progress.value, [0, 1], [0, (2 * width) / 3])},
      {translateY: interpolate(progress.value, [0, 1], [0, 40])},
      {rotate: `${interpolate(progress.value, [0, 1], [0, -10])}deg`},
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <BottomBar {...props} />}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 32,
    overflow: 'hidden',
  },
});



export default BottomTabs;
