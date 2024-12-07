import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from '@react-navigation/drawer';
import React, {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DATA = {
  title: 'Beka',
  items: ['Start', 'Your Cart', 'Favourites', 'Your Order'],
  footer: 'Sign out',
};

const CustomDrawer = ({navigation}: DrawerContentComponentProps) => {
  const {title, items, footer} = DATA;
  const {top} = useSafeAreaInsets();

  const progress = useDrawerProgress();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: interpolate(progress.value, [0, 1], [0, top])}],
  }));

  const {toggleDrawer} = navigation;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {items.map(item => (
          <TouchableOpacity key={item} onPress={toggleDrawer}>
            <Text style={styles.item}>{item}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.footer}>{footer}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#192841',
    paddingTop: 110,
    borderTopLeftRadius: 32,
  },
  title: {
    fontSize: 28,
    color: 'white',
    fontWeight: '700',
    marginBottom: 36,
    textAlign: 'center',
  },
  item: {
    fontSize: 24,
    color: 'white',
    marginBottom: 36,
  },
  footer: {
    fontSize: 24,
    paddingTop: 48,
    color: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
  },
});

export default memo(CustomDrawer);
