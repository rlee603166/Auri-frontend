import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import theme from "@/app/theme/justin-theme";

/**
 * ActivityCard Component
 *
 * A card component for displaying activity information with a title,
 * description, and an icon.
 *
 * @example
 * <ActivityCard
 *   title="Daily Activity"
 *   description="Completed 5,000 steps today"
 *   iconUrl="https://example.com/activity-icon.png"
 *   onIconPress={() => showActivityDetails()}
 * />
 */

interface ActivityCardProps {
  /** Title of the activity card */
  title: string;
  /** Description text for the activity */
  description: string;
  /** URL for the icon image */
  iconUrl: string;
  /** Function called when the icon is pressed */
  onIconPress?: () => void;
}

export default function ActivityCard({
  title,
  description,
  iconUrl,
  onIconPress = () => {},
}: ActivityCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            onPress={onIconPress}
            accessibilityRole="button"
            accessibilityLabel={`${title} icon`}
          >
            <Image
              source={{ uri: iconUrl }}
              style={styles.icon}
              accessibilityLabel={`${title} icon`}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.spacing.cardPadding,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.medium,
    flexDirection: "row",
    gap: theme.spacing.md + 5, // 21px
  },
  content: {
    flex: 1,
    gap: theme.spacing.cardPadding,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  icon: {
    width: 24,
    height: 24,
  },
  description: {
    width: "100%",
    color: theme.colors.text.secondary,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
});
