import React from "react";
import { Link, router } from "expo-router";
import { ThemedText } from "@components/ThemedText";
import { ThemedView } from "@components/ThemedView";
import Button from "@components/Button";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { signIn } from "../services/signin";

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_WEBCLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: false, // [Android] related to `serverAuthCode`, read the docs link below *.
});

const handleSignInWithGoogle = () => {
  signIn();
  () => router.push("/onboarding/authScreen");
};

export default function Welcome() {
  return (
    <ThemedView className="flex-1 justify-center px-4">
      <ThemedText className="text-center my-4">Welcome</ThemedText>
      <Link className="" href={{ pathname: "/onboarding" }} asChild>
        <Button className="" title="Welcome" />
      </Link>
      <Link
        className="my-4"
        href={{ pathname: "/onboarding/authScreen" }}
        asChild
      >
        <Button className="" title="Sign up" />
      </Link>
      <Link className="" href={{ pathname: "/onboarding/mapbox" }} asChild>
        <Button className="" onPress={signIn} title="Continue with Google" />
      </Link>
    </ThemedView>
  );
}
