import * as React from "react";
import Svg, { Path, Circle, Rect, SvgProps } from "react-native-svg";
const Profile = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-square-user-round"
    {...props}
  >
    <Path d="M18 21a6 6 0 0 0-12 0" />
    <Circle cx={12} cy={11} r={4} />
    <Rect width={18} height={18} x={3} y={3} rx={2} />
  </Svg>
);
export default Profile;
