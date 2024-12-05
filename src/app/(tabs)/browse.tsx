import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import * as Location from "expo-location";

// Set the Mapbox access token from the environment variable
Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY || "");

export default function Browse() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  // State to track if the location is available
  const [locationReady, setLocationReady] = useState(false);

  useEffect(() => {
    (async () => {
      // Request permission for location access
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Get the current location of the user
      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation);
      setLocationReady(true);
    })();
  }, []);

  return (
    <View className="flex-1" style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <MapView
        // styleURL="mapbox://styles/mapbox/dark-v11"
        logoEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
        compassEnabled
        compassViewPosition={3}
        compassFadeWhenNorth
        projection="globe" // Start with the globe projection
        style={styles.map}
      >
        {/* Initial Camera for the globe */}
        {!locationReady && (
          <Camera
            centerCoordinate={[0, 0]} // Set camera to global coordinates
            zoomLevel={1} // Global zoom level
            animationMode="none"
          />
        )}

        {/* Camera for user's location once it's available */}
        {locationReady && location && (
          <>
            <Camera
              centerCoordinate={[
                location.coords.longitude,
                location.coords.latitude,
              ]}
              zoomLevel={10} // Zoom in once location is found
              animationMode="flyTo" // Smooth transition
              animationDuration={3000} // Duration of the animation in milliseconds
            />
            <LocationPuck
              pulsing={{ isEnabled: true }}
              visible={true}
              puckBearingEnabled
              puckBearing="heading"
            />
          </>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: 680, // Fixed height for the map
    width: "100%", // Full width
  },
});
