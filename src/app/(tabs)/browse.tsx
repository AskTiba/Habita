import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Mapbox, { Camera, LocationPuck, MapView } from "@rnmapbox/maps";
import * as Location from "expo-location";

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_PUBLIC_KEY || "");

export default function Browse() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [locationReady, setLocationReady] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation(userLocation);
      setLocationReady(true);
    })();
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <MapView
        logoEnabled={false}
        scaleBarEnabled={false}
        attributionEnabled={false}
        compassEnabled
        compassViewPosition={3}
        compassFadeWhenNorth
        projection="globe"
        style={styles.map}
      >
        {/* Default Camera */}
        <Camera centerCoordinate={[0, 0]} zoomLevel={1} animationMode="none" />

        {/* User's Location */}
        {locationReady && location && (
          <>
            <Camera
              centerCoordinate={[
                location.coords.longitude,
                location.coords.latitude,
              ]}
              zoomLevel={10}
              animationMode="flyTo"
              animationDuration={3000}
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // Makes the map fill the entire container
  },
});
