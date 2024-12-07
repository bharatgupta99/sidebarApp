import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {memo} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

type RouteIconMapType = {
  [key: string]: {
    active: React.ReactNode;
    inactive: React.ReactNode;
  };
};
const RouteIconMap: RouteIconMapType = {
  Home: {
    active: <FontAwesome6 size={24} name="house" iconStyle="solid" />,
    inactive: <FontAwesome6 size={24} name="house" iconStyle="regular" />,
  },
  Contact: {
    active: <FontAwesome6 size={24} name="address-book" iconStyle="solid" />,
    inactive: (
      <FontAwesome6 size={24} name="address-book" iconStyle="regular" />
    ),
  },
};

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
        const icon = RouteIconMap[route.name];
        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={style.tabBarItem}>
            {isFocused ? icon.active : icon.inactive}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    paddingTop: 32,
    backgroundColor: 'white',
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
  },
});

export default memo(BottomBar);
