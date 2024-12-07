
# Drawer and Bottom Tab Navigation Animation

This React Native application demonstrates an animated integration of a **Drawer Navigator** and a **Bottom Tab Navigator** using **React Navigation** and **React Native Reanimated**. The app allows the bottom tab navigator to animate in sync with the drawer's progress, creating a smooth and visually appealing transition.

---

## **Thought Process**

### 1. **Defining the Navigation Architecture**
The app includes two primary navigators:
- **Drawer Navigator**: Provides access to a side drawer for navigation.
- **Bottom Tab Navigator**: Hosts two tabs for additional navigation inside the drawer.

The Drawer Navigator wraps the Bottom Tab Navigator, ensuring that the drawer controls the animation of the entire bottom tab content.

### 2. **Using Reanimated for Smooth Animations**
To synchronize the animations, the `useDrawerProgress` hook from React Navigation is utilized. This hook provides a progress value (ranging from `0` to `1`) representing the current state of the drawer (closed to fully open).

The progress value is then used with Reanimated's `useAnimatedStyle` and `interpolate` functions to:
- Translate the Bottom Tab Navigator horizontally as the drawer opens.
- Rotate the Bottom Tab Navigator slightly for a tilted effect.
- Translate the Bottom Tab Navigator and Drawer horizontally downwards. Since the downward motion logic is supposed to be used in two components, it moved to a reusable hook.

### 3. **Wrapping the Bottom Tabs in an Animated View**
The `BottomTabs` component is wrapped in an `Animated.View`, allowing the animated transformations (translation and scaling) to be applied dynamically based on the drawer's progress.

### 4. **Customizing Animations**
- **TranslateX**: Moves the entire bottom tab navigator to the right as the drawer opens.
- **Rotate**: Slightly tilts the bottom tab navigator to enhance the drawer animation effect.
- **TranslateY**: Move the drawer and the bottom tab navigator to the bottom 

### 5. **Final Implementation**
Combining React Navigation's navigation setup with Reanimated's hooks ensures:
- Clean and declarative animation logic.
- Flexible customization of animation styles.

---

## **GIF Demonstration**

![Drawer and Bottom Tab Animation](https://github.com/bharatgupta99/sidebarApp/blob/main/demo.gif)

