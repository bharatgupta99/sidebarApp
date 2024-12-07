import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/header';
import Animated from 'react-native-reanimated';
import useDrawerScreenTopStyle from '../hooks/useDrawerScreenTopStyle';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../navigation/homeStack';
import COLORS from '../constants/colors';

const Home = () => {
  const topAnimatedStyle = useDrawerScreenTopStyle();
  const {navigate} = useNavigation();

  const handleOnScreen1 = () => {
    navigate(SCREENS.Screen1);
  };

  return (
    <Animated.View style={[styles.parentContianer, topAnimatedStyle]}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity onPress={handleOnScreen1}>
          <Text style={styles.content}>Go to Screen 1</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  parentContianer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  content: {
    color: COLORS.blue,
    fontSize: 12,
  },
});

export default Home;
