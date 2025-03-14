import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import theme from "@/theme";

/**
 * SocialSignIn Component
 *
 * A component that provides buttons for signing in with social media accounts
 * like Google and Facebook.
 *
 * @example
 * <SocialSignIn
 *   onGoogleSignIn={handleGoogleSignIn}
 *   onFacebookSignIn={handleFacebookSignIn}
 * />
 */

interface SocialSignInProps {
  /** Function called when the Google sign in button is pressed */
  onGoogleSignIn?: () => void;
  /** Function called when the Facebook sign in button is pressed */
  onFacebookSignIn?: () => void;
}

export default function SocialSignIn({
  onGoogleSignIn = () => {},
  onFacebookSignIn = () => {},
}: SocialSignInProps) {
  return (
    <View style={styles.container}>
      <Divider text="Sign in with social media" />

      <View style={styles.buttonsContainer}>
        {/* Google Sign In */}
        <Button
          label="Sign in with Google"
          variant="outline"
          onPress={onGoogleSignIn}
          accessibilityLabel="Sign in with Google button"
          style={styles.socialButton}
          textStyle={styles.socialButtonText}
        />

        {/* Facebook Sign In */}
        <Button
          label="Sign in with Facebook"
          variant="outline"
          onPress={onFacebookSignIn}
          accessibilityLabel="Sign in with Facebook button"
          style={styles.socialButton}
          textStyle={styles.socialButtonText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: theme.spacing.lg,
  },
  buttonsContainer: {
    gap: theme.spacing.md,
  },
  socialButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  socialButtonText: {
    color: theme.colors.text.primary,
  },
});
