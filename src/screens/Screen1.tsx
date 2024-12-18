import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constants/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Screen1 = () => {
  const {pop} = useNavigation<NativeStackNavigationProp<any>>();
  const handleGoToHome = () => {
    pop();
  };
  return (
    <SafeAreaView style={[styles.parentContianer]}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>Screen1</Text>
        <TouchableOpacity onPress={handleGoToHome}>
          <Text style={styles.content}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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

export default Screen1;
