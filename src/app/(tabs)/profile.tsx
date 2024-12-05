import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import React from "react";

export default function Profile() {
  return (
    <ThemedView className="flex-1">
      <ThemedText className="flex-1">Profile</ThemedText>
    </ThemedView>
  );
}
