import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Message = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-message-square-text"
    {...props}
  >
    <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <Path d="M13 8H7" />
    <Path d="M17 12H7" />
  </Svg>
);
export default Message;
