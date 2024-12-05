import * as React from "react";
import Svg, { G, Circle, Path, SvgProps } from "react-native-svg";
const Browse = (props: SvgProps) => (
  <Svg viewBox="0 0 48 48" fill="#000000" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <G fill="#37474F">
        <Circle cx={33} cy={16} r={6} />
        <Circle cx={15} cy={16} r={6} />
        <Path d="M46.7,25l-15.3,3H16.7L1.4,25l4.3-7.9c1.1-1.9,3.1-3.1,5.3-3.1h26.2c2.2,0,4.2,1.2,5.3,3.1L46.7,25z" />
        <Circle cx={38} cy={30} r={10} />
        <Circle cx={10} cy={30} r={10} />
        <Circle cx={24} cy={28} r={5} />
      </G>
      <Circle fill="#546E7A" cx={24} cy={28} r={2} />
      <G fill="#a0f">
        <Circle cx={38} cy={30} r={7} />
        <Circle cx={10} cy={30} r={7} />
      </G>
      <G fill="#CE93D8">
        <Path d="M41.7,27.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1 c1.2-1.3,3.3-1.3,4.5,0c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3C42.1,28.7,42.1,28.1,41.7,27.7z" />
        <Path d="M10,26c-1.4,0-2.8,0.6-3.7,1.7c-0.4,0.4-0.3,1,0.1,1.4c0.4,0.4,1,0.3,1.4-0.1c1.2-1.3,3.3-1.3,4.5,0 c0.2,0.2,0.5,0.3,0.7,0.3c0.2,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0.1-1.4C12.8,26.6,11.4,26,10,26z" />
      </G>
    </G>
  </Svg>
);
export default Browse;
