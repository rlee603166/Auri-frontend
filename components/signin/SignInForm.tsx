import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Mail, Lock, Check } from "lucide-react-native";
import Button from "../ui/Button";
import theme from "@/theme";

/**
 * SignInForm Component
 *
 * A form component for user authentication with email and password,
 * including remember me checkbox and forgot password link.
 *
 * @example
 * <SignInForm
 *   onSignIn={handleSignIn}
 *   onForgotPassword={handleForgotPassword}
 * />
 */

interface SignInFormProps {
  /** Function called when the sign in button is pressed */
  onSignIn?: () => void;
  /** Function called when the forgot password link is pressed */
  onForgotPassword?: () => void;
}

export default function SignInForm({
  onSignIn = () => {},
  onForgotPassword = () => {},
}: SignInFormProps) {
  return (
    <View style={styles.container}>
      {/* Input Fields */}
      <View style={styles.inputsContainer}>
        {/* Email Input */}
        <View style={styles.inputField}>
          <View style={styles.iconContainer}>
            <Mail width={24} height={24} color={theme.colors.text.secondary} />
          </View>
          <Text style={styles.inputText}>Enter your email</Text>
        </View>

        {/* Password Input */}
        <View style={styles.inputField}>
          <View style={styles.iconContainer}>
            <Lock width={24} height={24} color={theme.colors.text.secondary} />
          </View>
          <Text style={styles.inputText}>Enter your password</Text>
        </View>

        {/* Remember Me & Forgot Password */}
        <View style={styles.optionsRow}>
          <View style={styles.rememberMeContainer}>
            <View style={styles.checkbox}>
              <Check
                width={16}
                height={16}
                color={theme.colors.text.white}
                strokeWidth={2}
              />
            </View>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>
          <TouchableOpacity
            onPress={onForgotPassword}
            accessibilityRole="button"
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign In Button */}
      <Button
        label="Sign in"
        onPress={onSignIn}
        accessibilityLabel="Sign in button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: theme.spacing.lg,
  },
  inputsContainer: {
    gap: theme.spacing.md,
  },
  inputField: {
    width: "100%",
    padding: theme.spacing.inputPadding,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  iconContainer: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputText: {
    color: theme.colors.text.secondary,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  optionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  checkbox: {
    padding: theme.spacing.xs,
    backgroundColor: theme.colors.primary.main,
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  rememberMeText: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  forgotPasswordText: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
});
