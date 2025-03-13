import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SignInForm from "@/components/signin/SignInForm";
import SocialSignIn from "@/components/signin/SocialSignIn";

/**
 * SignInScreen Component
 *
 * A sign-in screen for the application featuring email/password inputs,
 * social media sign-in options, and account creation link.
 */
export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>Sign in to your account via email</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formContainer}>
          <SignInForm />
          <SocialSignIn />
        </View>

        {/* Create Account Link */}
        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>
            <Text style={styles.notMemberText}>Not a member? </Text>
            <Text style={styles.createNewText}>Create new account</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    padding: 20,
    gap: 40,
  },
  header: {
    width: "100%",
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  title: {
    textAlign: "center",
    color: "#222222",
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Inter",
  },
  subtitle: {
    textAlign: "center",
    color: "#777777",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Inter",
  },
  formContainer: {
    width: "100%",
    gap: 24,
  },
  createAccountContainer: {
    width: "100%",
  },
  createAccountText: {
    textAlign: "center",
  },
  notMemberText: {
    color: "#222222",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
  },
  createNewText: {
    color: "#2c2c2c",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
  },
});
