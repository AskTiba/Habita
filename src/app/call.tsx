import { View, Text } from "react-native";
import React from "react";
import { StreamCall, useStreamVideoClient } from "@stream-io/video-react-sdk";

export default function CallScreen() {
  const videoClient = useStreamVideoClient();
  const call = videoClient?.call("default", "my-first-call");
  call?.join({ create: true });

  return <StreamCall call={call} />;
}
