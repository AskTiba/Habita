import { ThemedText } from "@/src/components/ThemedText";
import { ThemedView } from "@/src/components/ThemedView";
import React, { useEffect } from "react";

export default function Chat() {
  return (
    <ThemedView className="flex-1">
      <ThemedText className="">Spaces</ThemedText>
    </ThemedView>
  );
}
