import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import theme from "@/theme";

/**
 * Button Component
 *
 * A customizable button component that supports different visual variants.
 *
 * @example
 * // Primary button (default)
 * <Button label="Submit" onPress={handleSubmit} />
 *
 * // Outline button
 * <Button label="Cancel" variant="outline" onPress={handleCancel} />
 *
 * // Secondary button
 * <Button label="More Info" variant="secondary" onPress={showInfo} />
 */

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  /** Text to display inside the button */
  label: string;
  /** Function called when button is pressed */
  onPress?: () => void;
  /** Visual style variant of the button */
  variant?: ButtonVariant;
  /** Accessibility label for screen readers */
  accessibilityLabel?: string;
  /** Additional styles for the button container */
  style?: ViewStyle;
  /** Additional styles for the button text */
  textStyle?: TextStyle;
}

export default function Button({
  label,
  onPress = () => {},
  variant = "primary",
  accessibilityLabel,
  style,
  textStyle,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel || label}
      accessibilityRole="button"
    >
      <Text style={[styles.text, styles[`${variant}Text`], textStyle]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: theme.spacing.buttonPadding.vertical,
    paddingHorizontal: theme.spacing.buttonPadding.horizontal,
    borderRadius: theme.borderRadius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: theme.colors.primary.dark,
  },
  secondary: {
    backgroundColor: theme.colors.background.secondary,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  text: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    textAlign: "center",
    fontFamily: theme.typography.fontFamily.primary,
  },
  primaryText: {
    color: theme.colors.text.white,
  },
  secondaryText: {
    color: theme.colors.text.primary,
  },
  outlineText: {
    color: theme.colors.text.primary,
  },
});
