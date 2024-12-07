import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../constants/colors';
import {DrawerNavigationProp} from '@react-navigation/drawer';

const Header = () => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const {toggleDrawer} = navigation;

  const handleHamburgerPress = () => {
    toggleDrawer();
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleHamburgerPress}>
        <FontAwesome6 name="bars" iconStyle="solid" size={24} color={'grey'} />
      </TouchableOpacity>
      <Text style={style.title}>START</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginLeft: 12,
    color: COLORS.grey,
    letterSpacing: 4,
  },
});

export default Header;
