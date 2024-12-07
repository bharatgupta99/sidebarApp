import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Contact from '../screens/Contact';
import BottomBar from '../components/bottomBar';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import {Dimensions, StyleSheet} from 'react-native';
import HomeStack from './homeStack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const Tabs = createBottomTabNavigator();

const MyTabs = () => {
  const {top} = useSafeAreaInsets();
  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: interpolate(progress.value, [0, 1], [0, (2 * width) / 3])},
      {translateY: interpolate(progress.value, [0, 1], [0, 40])},
      {rotate: `${interpolate(progress.value, [0, 1], [0, -10])}deg`},
    ],
  }));

  const mainAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: interpolate(progress.value, [0, 1], [0, top])}],
  }));

  return (
    <Animated.View style={[styles.parentContainer, mainAnimatedStyle]}>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Tabs.Navigator
          screenOptions={{headerShown: false}}
          tabBar={props => <BottomBar {...props} />}>
          <Tabs.Screen name="Home" component={HomeStack} />
          <Tabs.Screen name="Contact" component={Contact} />
        </Tabs.Navigator>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: '#192841',
  },
  container: {
    flex: 1,
    borderRadius: 32,
    overflow: 'hidden',
  },
});

export default MyTabs;
