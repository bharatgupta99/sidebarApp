import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';
import useDrawerScreenTopStyle from '../hooks/useDrawerScreenTopStyle';
import Animated from 'react-native-reanimated';

const Contact = () => {
  const topAnimatedStyle = useDrawerScreenTopStyle();

  return (
    <Animated.View style={[topAnimatedStyle, styles.parentContianer]}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Contact</Text>
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

export default Contact;
