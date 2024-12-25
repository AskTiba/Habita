import React from "react";
import Browse from "@assets/svgs/browse";
import Habita from "@assets/svgs/habita";
import Message from "@assets/svgs/message";
import Profile from "@assets/svgs/profile";
import Space from "@assets/svgs/space";
import Wishlist from "@assets/svgs/wishlist";
import { View } from "react-native";

// Define the Icon type for better type safety
type IconProps = {
  height?: number;
  width?: number;
  color?: string; // Allow customization of icon color if needed
};

export const icon = {
  browse: (props: IconProps) => <Browse height={28} width={28} {...props} />,
  wishlist: (props: IconProps) => (
    <Wishlist height={28} width={28} {...props} />
  ),
  index: (props: IconProps) => <Habita height={28} width={28} {...props} />,
  chat: (props: IconProps) => <Message height={28} width={28} {...props} />,
  profile: (props: IconProps) => <Profile height={28} width={28} {...props} />,
  space: (props: IconProps) => <Space height={28} width={28} {...props} />, // Added space icon if necessary
};

// Fallback icon if the route is not defined
export const defaultIcon = (props: IconProps) => (
  <View
    style={{
      width: 28,
      height: 28,
      backgroundColor: "#e0e0e0",
      borderRadius: 4,
    }}
  />
);
