import React, { ReactNode } from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import theme from "@/theme";

/**
 * IconButton Component
 *
 * A button that displays an icon instead of text, commonly used for actions
 * that can be represented by a visual symbol.
 *
 * @example
 * // Basic usage with Lucide icon
 * <IconButton
 *   icon={<Heart width={24} height={24} color="#222" />}
 *   accessibilityLabel="Like"
 *   onPress={handleLike}
 * />
 *
 * // Custom styling
 * <IconButton
 *   icon={<X width={24} height={24} color="#222" />}
 *   accessibilityLabel="Close"
 *   style={{ backgroundColor: '#f0f0f0' }}
 * />
 */

interface IconButtonProps {
  /** React element to render as the icon (typically from lucide-react-native) */
  icon: ReactNode;
  /** Function called when button is pressed */
  onPress?: () => void;
  /** Accessibility label for screen readers (required for a11y) */
  accessibilityLabel: string;
  /** Additional styles to apply to the button */
  style?: ViewStyle;
}

export default function IconButton({
  icon,
  onPress = () => {},
  accessibilityLabel,
  style,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.iconButton, style]}
      onPress={onPress}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
    >
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
});
