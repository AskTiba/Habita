// Define environment variables
const APP_VARIANT = process.env.APP_VARIANT || "production"; // Fallback to 'production' if undefined
const IS_DEV = APP_VARIANT === "development";
const IS_PREVIEW = APP_VARIANT === "preview";
const IS_PRODUCTION = process.env.NODE_ENV === "production"; // Ensure NODE_ENV is set properly

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.asktiba.Habita";
  }
  if (IS_PREVIEW) {
    return "com.asktiba.Habita.preview";
  }
  return "com.asktiba.Habita.production";
};
const getAppName = () => {
  if (IS_DEV) {
    return "Habita";
  }
  if (IS_PREVIEW) {
    return "Habita (Preview)";
  }
  return "Habita (final";
};

module.exports = {
  expo: {
    name: getAppName(),
    slug: "Habita",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/images/icon.png",
    scheme: "habita",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      package: getUniqueIdentifier(),
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      adaptiveIcon: {
        foregroundImage: "./src/assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./src/assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-av",
        {
          microphonePermission:
            "Allow $(PRODUCT_NAME) to access your microphone.",
        },
      ],
      ["expo-build-properties"],
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      "@react-native-google-signin/google-signin",
      [
        "expo-splash-screen",
        {
          image: "./src/assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsDownloadToken: process.env.EXPO_PUBLIC_MAPBOX_SECRET_KEY,
          RNMapboxMapsVersion: "11.0.0",
        },
      ],
      [
        "expo-location",
        {
          locationWhenInUsePermission: "Show current location on map.",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      eas: {
        projectId: "5492766b-51c0-44b7-a358-75d1018afbb6",
      },
    },
    updates: {
      url: "https://u.expo.dev/5492766b-51c0-44b7-a358-75d1018afbb6",
    },
    runtimeVersion: {
      policy: "appVersion",
    },
  },
};
