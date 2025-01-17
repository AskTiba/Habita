import { Alert, Button, Platform, SafeAreaView, StatusBar } from "react-native";
import { ThemedText } from "@components/ThemedText";
import { ThemedView } from "@components/ThemedView";
import { useNotification } from "@context/NotificationContext";

export default function Profile() {
  const { expoPushToken, notification, error } = useNotification();

  if (error)
    return <ThemedText className="">Error: {error.message}</ThemedText>;
  console.log(JSON.stringify(notification, null, 2));

  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 10,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ThemedText className="text-red-600 font-bold text-xl">
          Your push token:
        </ThemedText>
        <ThemedText>{expoPushToken}</ThemedText>
        <ThemedText className="text-red-600 font-bold text-xl">
          Latest notification:
        </ThemedText>
        <ThemedText>{notification?.request.content.title}</ThemedText>
        <ThemedText>
          {JSON.stringify(notification?.request.content.data, null, 2)}
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}
