import React from "react";
import { Link } from "expo-router";
import { ThemedText } from "@components/ThemedText";
import { ThemedView } from "@components/ThemedView";
import Button from "@components/Button";

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
    </ThemedView>
  );
}
