import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';
import Animated from 'react-native-reanimated';
import useDrawerScreenTopStyle from '../hooks/useDrawerScreenTopStyle';

const Home = () => {
  const topAnimatedStyle = useDrawerScreenTopStyle();
  return (
    <Animated.View style={[styles.parentContianer, topAnimatedStyle]}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  parentContianer: {
    flex: 1,
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default Home;
