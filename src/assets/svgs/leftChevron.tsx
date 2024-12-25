import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LeftChevron = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#909cc2"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
    {...props}
  >
    <Path d="m15 18-6-6 6-6" />
  </Svg>
);
export default LeftChevron;
