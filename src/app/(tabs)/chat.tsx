import { View, Text } from 'react-native'
import React from 'react'

export default function Chat() {
  return (
    <View>
      <Text>chat</Text>
    </View>
  )
}

// import LeftChevron from "@/src/assets/svgs/leftChevron";
// import Media from "@/src/assets/svgs/media";
// import { ThemedText } from "@/src/components/ThemedText";
// import { ThemedView } from "@/src/components/ThemedView";
// import { Link, router, Stack } from "expo-router";
// import React, { useEffect, useState } from "react";
// import { TouchableOpacity } from "react-native";
// import {
//   ChannelList,
//   Channel,
//   ChannelType,
//   MessageList,
//   MessageInput,
// } from "stream-chat-expo";

// export default function Chat() {
//   const [channel, setChannel] = useState<ChannelType>();

//   return (
//     <ThemedView className="flex-1">
//       <Stack.Screen
//         options={{
//           headerShown: true,
//           headerLeft: () => (
//             <TouchableOpacity
//               onPress={() => setChannel(undefined)}
//               className="ml-4"
//             >
//               <LeftChevron />
//             </TouchableOpacity>
//           ),
//           headerRight: () => (
//             <TouchableOpacity
//               onPress={() => router.push("/call")}
//               className="mr-6"
//             >
//               <Media />
//             </TouchableOpacity>
//           ),
//         }}
//       />

//       {channel ? (
//         <Channel channel={channel}>
//           <MessageList />
//           <MessageInput />
//         </Channel>
//       ) : (
//         <ChannelList onSelect={setChannel} />
//       )}
//     </ThemedView>
//   );
// }

