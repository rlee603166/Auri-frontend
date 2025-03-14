import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "@/theme";

/**
 * CalendarHeader Component
 *
 * A header component for the calendar screen with a title.
 *
 * @example
 * <CalendarHeader title="Calendar" />
 */

interface CalendarHeaderProps {
  /** Title to display in the header */
  title?: string;
}

export default function CalendarHeader({
  title = "Calendar",
}: CalendarHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: theme.spacing.container,
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: theme.colors.background.main,
  },
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.fontFamily.primary,
  },
});
