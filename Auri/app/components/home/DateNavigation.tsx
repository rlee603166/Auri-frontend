import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import theme from "@/app/theme/justin-theme";

/**
 * DateNavigation Component
 *
 * A component for navigating between dates with previous and next buttons
 * and a display of the current date.
 *
 * @example
 * <DateNavigation
 *   currentDate="Today"
 *   onPrevious={() => navigateToPreviousDay()}
 *   onNext={() => navigateToNextDay()}
 * />
 */

interface DateNavigationProps {
  /** Text to display for the current date */
  currentDate: string;
  /** Function called when the previous button is pressed */
  onPrevious?: () => void;
  /** Function called when the next button is pressed */
  onNext?: () => void;
}

export default function DateNavigation({
  currentDate = "Today",
  onPrevious = () => {},
  onNext = () => {},
}: DateNavigationProps) {
  return (
    <View style={styles.container}>
      {/* Left Arrow */}
      <TouchableOpacity
        onPress={onPrevious}
        accessibilityRole="button"
        accessibilityLabel="Previous day"
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900191416-node-9292%3A347-1741900190885.png",
          }}
          style={styles.arrow}
          accessibilityLabel="Left arrow"
        />
      </TouchableOpacity>

      {/* Date Text */}
      <Text style={styles.dateText}>{currentDate}</Text>

      {/* Right Arrow */}
      <TouchableOpacity
        onPress={onNext}
        accessibilityRole="button"
        accessibilityLabel="Next day"
      >
        <Image
          source={{
            uri: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900192087-node-9292%3A350-1741900191525.png",
          }}
          style={styles.arrow}
          accessibilityLabel="Right arrow"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 9,
  },
  dateText: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  arrow: {
    width: 24,
    height: 24,
  },
});
