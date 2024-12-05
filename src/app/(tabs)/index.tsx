import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import React from "react";

export default function Home() {
  return (
    <ThemedView className="flex-1">
      <ThemedText className="text-lg text-persimmon">Spaces</ThemedText>
    </ThemedView>
  );
}
