import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import { icon } from "@constants/Icon";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
type TabBarButtonProps = {
  isFocused: boolean;
  routeName: string;
  color: string;
  label: string;
  onPress: () => void;
  onLongPress: () => void;
};

export default function TabBarButton({
  isFocused,
  label,
  color,
  routeName,
  onPress,
  onLongPress,
}: TabBarButtonProps) {
  const { colors } = useTheme();
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 2500 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 12]);
    return {
      transform: [
        {
          scale: scaleValue,
        },
      ],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return { opacity };
  });

  return (
    <>
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        // style={{ flex: 1 }}
        className="flex-1 justify-center items-center gap-2"
      >
        <Animated.View style={animatedIconStyle}>
          {icon[routeName]({
            color: isFocused ? "#FFFFFF" : "#A0A0A0",
          })}
        </Animated.View>

        <Animated.Text
          style={[
            { color: isFocused ? "#FFFFFF" : "#757575", fontSize: 13 },
            animatedTextStyle,
          ]}
        >
          {label}
        </Animated.Text>
      </Pressable>
    </>
  );
}
