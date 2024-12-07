import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// move to seperate file
const BottomBar = ({state, navigation}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        style.container,
        {
          paddingBottom: bottom,
        },
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        return (
          <TouchableOpacity onPress={onPress} style={{flex: 1}}>
            <Text>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

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
