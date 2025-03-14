import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";
import theme from "@/theme";

/**
 * Divider Component
 *
 * A horizontal divider line that can optionally include centered text.
 *
 * @example
 * // Simple divider line
 * <Divider />
 *
 * // Divider with text
 * <Divider text="OR" />
 *
 * // Styled divider
 * <Divider style={{ marginVertical: 20 }} />
 */

interface DividerProps {
  /** Optional text to display in the center of the divider */
  text?: string;
  /** Additional styles to apply to the divider container */
  style?: ViewStyle;
}

export default function Divider({ text, style }: DividerProps) {
  if (!text) {
    return <View style={[styles.divider, style]} />;
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: theme.spacing.md + 5, // 21px
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },
  text: {
    textAlign: "center",
    color: theme.colors.text.secondary,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
});
