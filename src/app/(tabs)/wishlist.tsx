import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import React from "react";
import * as Notifications from "expo-notifications";
import Button from "@/src/components/Button";

export default function Wishlist() {
  return (
    <ThemedView className="flex-1">
      <Button
        className="mx-4"
        title="Schedule test notifications"
        onPress={schedulePushNotification}
      />
    </ThemedView>
  );
}

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Check out the new Tinder Swipe Animation! 📬",
      body: "Here is the notification body",
      data: { data: "goes here", url: "/src/app/onboarding/testing" },
    },
    trigger: { seconds: 5 },
  });
}
