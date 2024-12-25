import * as React from "react";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";
const Browse = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-compass"
    {...props}
  >
    <Path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
    <Circle cx={12} cy={12} r={10} />
  </Svg>
);
export default Browse;
