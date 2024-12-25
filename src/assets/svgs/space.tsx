import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
const Spaces = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-orbit"
    {...props}
  >
    <Circle cx={12} cy={12} r={3} />
    <Circle cx={19} cy={5} r={2} />
    <Circle cx={5} cy={19} r={2} />
    <Path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
    <Path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
  </Svg>
);
export default Spaces;
