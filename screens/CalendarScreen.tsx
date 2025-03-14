import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CalendarView from "@/components/calendar/CalendarView";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import BottomNavigation from "@/components/home/BottomNavigation";
import theme from "@/theme";

/**
 * CalendarScreen Component
 *
 * A screen that displays a monthly calendar with selectable dates.
 * Users can navigate between months and select dates.
 *
 * @example
 * <CalendarScreen />
 */
export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  // Format the selected date for display
  const formatSelectedDate = (date?: Date) => {
    if (!date) return "No date selected";

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      {/* Calendar Header */}
      <CalendarHeader title="Calendar" />

      <View style={styles.content}>
        {/* Calendar Component */}
        <CalendarView
          onSelectDate={handleDateSelect}
          selectedDate={selectedDate}
        />

        {/* Selected Date Display */}
        {selectedDate && (
          <View style={styles.selectedDateContainer}>
            <Text style={styles.selectedDateLabel}>Selected Date:</Text>
            <Text style={styles.selectedDateText}>
              {formatSelectedDate(selectedDate)}
            </Text>
          </View>
        )}
      </View>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab="calendar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  content: {
    flex: 1,
    padding: theme.spacing.container,
    paddingTop: theme.spacing.md,
    alignItems: "center",
  },
  selectedDateContainer: {
    marginTop: theme.spacing.xl,
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.small,
    width: "100%",
    maxWidth: 434,
  },
  selectedDateLabel: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
    fontFamily: theme.typography.fontFamily.primary,
  },
  selectedDateText: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.fontFamily.primary,
  },
});
