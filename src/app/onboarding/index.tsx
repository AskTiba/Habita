import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { ThemedView } from "@/src/components/ThemedView";
import { ThemedText } from "@/src/components/ThemedText";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
    router.push("/(tabs)");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemedView className="bg-mintcream flex-1 items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ThemedText className="text-2xl font-bold text-green-500">
        Habita
      </ThemedText>
      <ThemedText className="font-semibold">
        Find your perfect habitat
      </ThemedText>
    </ThemedView>
  );
}
