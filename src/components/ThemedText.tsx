import { Text, TextProps } from "react-native";
import { useThemeColor } from "@hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedText({
  lightColor,
  darkColor,
  className,
  style,
  ...props
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      className={className} // NativeWind handles styling
      style={[style]} // Only user-defined styles
      {...props}
    />
  );
}
