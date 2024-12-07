import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const DATA = {
  title: 'Beka',
  items: ['Start', 'Your Cart', 'Favourites', 'Your Order'],
  footer: 'Sign out',
};

const CustomDrawer = () => {
  const {title, items, footer} = DATA;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {items.map(item => (
          <Text style={styles.item}>{item}</Text>
        ))}
        <Text style={styles.footer}>{footer}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 136,
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
