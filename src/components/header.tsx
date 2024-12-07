import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const {toggleDrawer} = navigation;

  const handleHamburgerPress = () => {
    toggleDrawer();
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleHamburgerPress}>
        <FontAwesome6 name="bars" iconStyle="solid" size={24} color={'grey'} />
      </TouchableOpacity>
      <Text style={style.title}>Start</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
  },
  title: {
    fontSize: 24,
    marginLeft: 12,
    color: 'grey',
  },
});

export default Header;
