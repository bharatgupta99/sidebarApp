import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabs from './bottom';

const Drawer = createDrawerNavigator({
  screens: {
    BottomTabBar: {
      screen: BottomTabs,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

export default Drawer;
