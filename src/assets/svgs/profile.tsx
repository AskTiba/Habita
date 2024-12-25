import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
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
    className="lucide lucide-circle-user"
    {...props}
  >
    <Circle cx={12} cy={12} r={10} />
    <Circle cx={12} cy={10} r={3} />
    <Path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
  </Svg>
);
export default Profile;
