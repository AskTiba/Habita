// Import necessary libraries and components
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import { ToastAndroid } from 'react-native';
import { useForm } from "react-hook-form"; // For form state management
import { yupResolver } from "@hookform/resolvers/yup"; // Integration of react-hook-form with Yup for validation
import * as yup from "yup"; // Validation schema builder
import Toast from "react-native-toast-message"; // For toast notifications

// Import custom components and services
import { ThemedText } from "@components/ThemedText";
import { ThemedView } from "@components/ThemedView";
import FormInputController from "@components/controllers/FormInputController";
import {
  signUpWithEmailPassword,
  signInWithEmailPassword,
} from "@services/authService"; // Custom authentication service
import Button from "@components/Button";

/**
 * Generate Yup schema based on whether the form is for signing up or signing in.
 * @param {boolean} isSignUp - Determines if the schema should include confirmPassword validation.
 */
const SignInSignUpSchema = (isSignUp: boolean) =>
  yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    ...(isSignUp && {
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    }),
  });

/**
 * AuthScreen Component
 * Handles both Sign-In and Sign-Up functionality using a toggle state.
 */
export default function AuthScreen() {
  // State to toggle between Sign-In and Sign-Up modes
  const [isSignUp, setIsSignUp] = useState(false);

  // Form management using react-hook-form and Yup schema validation
  const {
    control, // To control inputs
    handleSubmit, // Handler for form submission
    formState: { errors }, // Contains form validation errors
  } = useForm({
    resolver: yupResolver(SignInSignUpSchema(isSignUp)), // Dynamic schema resolver
  });

  function showSignUpSuccessToast() {
    ToastAndroid.show('Signed up successfully!', ToastAndroid.SHORT);
  }
  
  function showSignInSuccessToast() {
    ToastAndroid.show('Signed in successfully!', ToastAndroid.SHORT);
  }
  

  /**
   * Handles form submission for both Sign-In and Sign-Up actions.
   * @param {Object} data - Form data containing email, password, and confirmPassword (if sign-up).
   */
  const onSubmit = async (data: {
    email: string;
    password: string;
    confirmPassword?: string;
  }) => {
    try {
      if (isSignUp) {
        // Sign-Up logic
        const user = await signUpWithEmailPassword(data.email, data.password);
        console.log("Sign-up successful:", JSON.stringify(user, null, 2));
        router.push("/(tabs)");
        // Display success toast notification
       showSignUpSuccessToast()
      } else {
        // Sign-In logic
        const user = await signInWithEmailPassword(data.email, data.password);
        console.log("Sign-in successful:", JSON.stringify(user, null, 2));
        router.push("/(tabs)");
        // Display success toast notification
       showSignInSuccessToast()
      }
      // Redirect to the home or another screen after success (not implemented here)
    } catch (error: any) {
      console.error("Auth error:", error.message);
      handleAuthError(error); // Handle authentication errors
    }
  };

  /**
   * Handles errors returned by authentication services.
   * @param {Object} error - Error object from the authentication service.
   */
  const handleAuthError = (error: any) => {
    // Match error codes and display appropriate alerts
    switch (error.code) {
      case "auth/wrong-password":
        alert("Invalid password. Please try again.");
        break;
      case "auth/user-not-found":
        alert("No user found with this email.");
        break;
      case "auth/email-already-in-use":
        alert("Email is already in use. Please try another.");
        break;
      case "auth/invalid-email":
        alert("Invalid email address.");
        break;
      default:
        alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <ThemedView className="flex-1 justify-center items-center">
      {/* Configure the screen header dynamically based on mode */}
      <Stack.Screen
        options={{
          title: isSignUp ? "Sign Up" : "Sign In",
          headerTitleAlign: "center", // Center-align header title
          headerShadowVisible: false, // Remove shadow
        }}
      />

      {/* Display a dynamic header text */}
      <ThemedText className="text-persimmon text-2xl text-center">
        {isSignUp ? "Create an Account" : "Welcome Back"}
      </ThemedText>

      {/* Email Input Field */}
      <FormInputController
        control={control} // Bind input to react-hook-form
        name="email" // Field name
        placeHolder="Enter your email"
        errors={errors} // Display validation errors
      />

      {/* Password Input Field */}
      <FormInputController
        control={control}
        name="password"
        placeHolder="Enter your password"
        props={{ secureTextEntry: true }} // Secure text entry for password
        errors={errors}
      />

      {/* Confirm Password Input Field (Visible only for Sign-Up mode) */}
      {isSignUp && (
        <FormInputController
          control={control}
          name="confirmPassword"
          placeHolder="Confirm your password"
          props={{ secureTextEntry: true }}
          errors={errors}
        />
      )}

      {/* Submit Button */}
      <Button
        className="w-11/12 my-4"
        title={isSignUp ? "Sign up" : "Sign in"}
        onPress={handleSubmit(onSubmit)} // Form submission handler
      />

      {/* Toggle between Sign-In and Sign-Up */}
      <ThemedText
        className="text-center text-blue-500 underline"
        onPress={() => setIsSignUp(!isSignUp)} // Switch mode on press
      >
        {isSignUp
          ? "Already have an account? Sign in here"
          : "Don't have an account? Sign up here"}
      </ThemedText>
    </ThemedView>
  );
}
