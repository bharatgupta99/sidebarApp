import React, {memo} from 'react';
import {View} from 'react-native';

const DATA = {
  title: 'Beka',
  item: ['Start', 'Your Cart', 'Favourites', 'Your Order'],
  footer: 'Sign out',
};

const CustomDrawer = props => {
  return (
    <View
      style={{
        flex: 1,
      }}
    />
  );
};

export default memo(CustomDrawer);
