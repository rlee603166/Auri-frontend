import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import theme from "@/app/theme/justin-theme";

/**
 * Card Component
 *
 * A container component with consistent styling for card-like UI elements.
 *
 * @example
 * <Card>
 *   <Text>Card content goes here</Text>
 * </Card>
 *
 * // With custom styling
 * <Card style={{ marginBottom: 20 }}>
 *   <Text>Custom styled card</Text>
 * </Card>
 */

interface CardProps {
  /** Content to be rendered inside the card */
  children: ReactNode;
  /** Additional styles to apply to the card */
  style?: ViewStyle;
}

export default function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.cardPadding,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.medium,
  },
});
