import {useDrawerProgress} from '@react-navigation/drawer';
import {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useDrawerScreenTopStyle = () => {
  const progress = useDrawerProgress();
  const {top} = useSafeAreaInsets();
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: interpolate(progress.value, [0, 1], [top, 24])}],
  }));

  return animatedStyle;
};

export default useDrawerScreenTopStyle;
