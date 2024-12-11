import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Mapbox, { MapView } from "@rnmapbox/maps";
import { Stack } from "expo-router";

// Set the Mapbox access token from the environment variable
Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY || "");

const MapBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* Transparent status bar for seamless UI */}
      <StatusBar translucent backgroundColor="transparent" />

      {/* MapView with customized settings */}
      <MapView
        logoEnabled={false} // Hides the Mapbox logo
        scaleBarEnabled={false} // Hides the scale bar
        attributionEnabled={false} // Hides attribution
        compassEnabled // Enables the compass
        compassViewPosition={3} // Compass position (top-right corner)
        compassFadeWhenNorth // Compass fades out when facing north
        projection="globe" // Globe projection for better 3D effect
        style={styles.map}
      />
    </View>
  );
};

export default MapBoxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
