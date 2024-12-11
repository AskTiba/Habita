import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useColorScheme } from "@hooks/useColorScheme";
import "react-native-reanimated"; // Ensure it is installed
import "@/global.css"; // Global CSS
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StreamChat } from "stream-chat";

console.log("API Key:", process.env.EXPO_PUBLICAPI_KEY);
const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY!);

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Detect system theme
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null); // Authenticated user

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: "john",
            name: "John Doe",
            image: "https://getstream.io/random_svg/?id=john&name=John%20Doe",
          },
          client.devToken("john")
        );

        const channel = client.channel("messaging", "the_park", {
          name: "The Park",
        });
        await channel.watch();
        console.log("Channel created and watched successfully!");
      } catch (error) {
        console.error("Error setting up client or channel:", error);
      }
    };

    setupClient();

    return () => {
      client.disconnectUser();
    };
  }, []);

  // Hide Splash Screen after fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(console.warn); // Safeguard
    }
  }, [fontsLoaded]);

  // Listen to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      // console.log("Auth State Changed:", JSON.stringify(authUser, null, 2));
      setUser(authUser);
    });
    return unsubscribe; // Clean up the listener
  }, []);

  // Ensure fonts are loaded before rendering the app
  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="not-found" /> */}
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
