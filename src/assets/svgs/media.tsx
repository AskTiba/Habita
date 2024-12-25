import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Media = (props: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M4.25 2C2.17893 2 0.5 3.67893 0.5 5.75V18.25C0.5 20.3211 2.17893 22 4.25 22H20.75C22.8211 22 24.5 20.3211 24.5 18.25V5.75C24.5 3.67893 22.8211 2 20.75 2H4.25ZM8.5 8.25133C8.5 7.4956 9.30605 7.01298 9.97222 7.36985L16.9718 11.1196C17.6755 11.4966 17.6755 12.5056 16.9718 12.8825L9.97221 16.6323C9.30605 16.9891 8.5 16.5065 8.5 15.7508V8.25133Z"
      fill="#4C4BF6"
    />
  </Svg>
);
export default Media;
