import { View, Platform, LayoutChangeEvent } from "react-native";
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useState, useMemo, useEffect } from "react";
import TabBarButton from "./TabBarButton";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  // State to track tab bar dimensions
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  // Memoized calculations for button and background dimensions
  const tabDimensions = useMemo(() => {
    const buttonWidth = dimensions.width / state.routes.length;
    const backgroundWidth = buttonWidth - 18; // Subtract margins
    const backgroundHeight = dimensions.height - 15;
    return {
      buttonWidth,
      backgroundWidth,
      backgroundHeight,
    };
  }, [dimensions, state.routes.length]);

  // Shared value for animating tab position
  const tabPositionX = useSharedValue(0);

  // Animated style for background movement
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX:
            tabPositionX.value +
            (tabDimensions.buttonWidth - tabDimensions.backgroundWidth) / 2,
        },
      ],
    };
  });

  // Layout handler to capture tab bar dimensions
  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  // Effect to set initial position when dimensions are available
  useEffect(() => {
    if (dimensions.width > 0) {
      // Explicitly set the initial position based on the current active tab index
      tabPositionX.value = withSpring(tabDimensions.buttonWidth * state.index, {
        duration: 0,
        dampingRatio: 1,
      });
    }
  }, [dimensions.width, state.index, tabDimensions.buttonWidth]);

  return (
    <View
      onLayout={onTabbarLayout}
      className="absolute bottom-0 flex-row justify-between items-center py-3 rounded-2xl bg-[#FAFAFA] shadow-black shadow-2xl"
    >
      {/* Animated background */}
      {dimensions.width > 0 && (
        <Animated.View
          className="absolute bg-tangerine rounded-3xl"
          style={[
            animatedStyle,
            {
              height: tabDimensions.backgroundHeight,
              width: tabDimensions.backgroundWidth,
            },
          ]}
        />
      )}

      {/* Tab buttons */}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        // Press handler
        const onPress = () => {
          // Animate background position
          tabPositionX.value = withSpring(tabDimensions.buttonWidth * index, {
            duration: 500, // Reduced duration for smoother animation
            dampingRatio: 0.8, // Optional: adds a slight bounce effect
          });

          // Navigation logic
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        // Long press handler
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? colors.primary : colors.text}
            label={label}
          />
        );
      })}
    </View>
  );
}
