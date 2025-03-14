import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import theme from "@/theme";

interface CalendarViewProps {
  /** Initial month to display (0-11) */
  initialMonth?: number;
  /** Initial year to display */
  initialYear?: number;
  /** Function called when a date is selected */
  onSelectDate?: (date: Date) => void;
  /** Currently selected date */
  selectedDate?: Date;
}

export default function CalendarView({
  initialMonth = new Date().getMonth(),
  initialYear = new Date().getFullYear(),
  onSelectDate = () => {},
  selectedDate,
}: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [currentYear, setCurrentYear] = useState(initialYear);

  // Get screen dimensions for responsive sizing
  const screenWidth = Dimensions.get("window").width;
  // Use a fixed width for web to prevent layout issues
  const calendarWidth =
    Platform.OS === "web" ? 434 : screenWidth - theme.spacing.container * 2;

  // Get month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day names - start with Monday for standard calendar format
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Navigate to previous month
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Navigate to next month
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay(); // Sunday-based (0 = Sunday, 6 = Saturday)
    return day === 0 ? 6 : day - 1; // Convert to Monday-based (0 = Monday, 6 = Sunday)
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Get days from previous month to fill the first row
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonthYear, prevMonth);

    // Add days from previous month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({
        day: daysInPrevMonth - firstDayOfMonth + i + 1,
        currentMonth: false,
        month: prevMonth,
        year: prevMonthYear,
      });
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
        month: currentMonth,
        year: currentYear,
      });
    }

    // Add days from next month to complete the grid
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextMonthYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const totalDaysToShow = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;
    const daysFromNextMonth = totalDaysToShow - (firstDayOfMonth + daysInMonth);

    for (let i = 1; i <= daysFromNextMonth; i++) {
      days.push({
        day: i,
        currentMonth: false,
        month: nextMonth,
        year: nextMonthYear,
      });
    }

    return days;
  };

  // Check if a day is selected
  const isDaySelected = (dayInfo: {
    day: number;
    month: number;
    year: number;
  }) => {
    if (!selectedDate) return false;

    return (
      selectedDate.getDate() === dayInfo.day &&
      selectedDate.getMonth() === dayInfo.month &&
      selectedDate.getFullYear() === dayInfo.year
    );
  };

  // Handle day selection
  const handleDayPress = (dayInfo: {
    day: number;
    month: number;
    year: number;
  }) => {
    const selectedDate = new Date(dayInfo.year, dayInfo.month, dayInfo.day);
    onSelectDate(selectedDate);

    // If the selected day is from a different month, navigate to that month
    if (dayInfo.month !== currentMonth || dayInfo.year !== currentYear) {
      setCurrentMonth(dayInfo.month);
      setCurrentYear(dayInfo.year);
    }
  };

  // Generate calendar grid
  const calendarDays = generateCalendarDays();

  return (
    <View style={styles.container}>
      {/* Month Navigation */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goToPreviousMonth}
          accessibilityLabel="Previous month"
          style={styles.navButton}
        >
          <ChevronLeft
            width={24}
            height={24}
            color={theme.colors.text.primary}
          />
        </TouchableOpacity>

        <Text style={styles.monthYearText}>
          {monthNames[currentMonth]} {currentYear}
        </Text>

        <TouchableOpacity
          onPress={goToNextMonth}
          accessibilityLabel="Next month"
          style={styles.navButton}
        >
          <ChevronRight
            width={24}
            height={24}
            color={theme.colors.text.primary}
          />
        </TouchableOpacity>
      </View>

      {/* Day Names */}
      <View style={styles.dayNamesContainer}>
        {dayNames.map((name, index) => (
          <View key={`day-name-${index}`} style={styles.dayNameCell}>
            <Text style={styles.dayNameText}>{name}</Text>
          </View>
        ))}
      </View>

      {/* Calendar Grid */}
      <View style={styles.calendarGrid}>
        {calendarDays.map((dayInfo, index) => (
          <View key={`day-${index}`} style={styles.dayCell}>
            <TouchableOpacity
              style={[
                styles.dayButton,
                !dayInfo.currentMonth && styles.otherMonthDay,
                isDaySelected(dayInfo) && styles.selectedDay,
              ]}
              onPress={() => handleDayPress(dayInfo)}
              accessibilityLabel={`${dayInfo.day} ${monthNames[dayInfo.month]}`}
            >
              <Text
                style={[
                  styles.dayText,
                  !dayInfo.currentMonth && styles.otherMonthDayText,
                  isDaySelected(dayInfo) && styles.selectedDayText,
                ]}
              >
                {dayInfo.day}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    ...theme.shadows.medium,
    alignSelf: "center",
    maxWidth: Platform.OS === "web" ? 434 : "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.sm,
  },
  navButton: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.borderRadius.md,
  },
  monthYearText: {
    fontSize: 24,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text.primary,
    fontFamily: theme.typography.fontFamily.primary,
  },
  dayNamesContainer: {
    flexDirection: "row",
    marginBottom: theme.spacing.md,
    width: "100%",
  },
  dayNameCell: {
    flex: 1,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  dayNameText: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  dayCell: {
    width: "14.28%",
    height: 52,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  dayButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background.main,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#e6eaef",
  },
  dayText: {
    fontSize: 16,
    color: theme.colors.text.primary,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  selectedDay: {
    backgroundColor: theme.colors.primary.main,
    borderColor: theme.colors.primary.main,
  },
  selectedDayText: {
    color: theme.colors.text.white,
  },
  otherMonthDay: {
    backgroundColor: theme.colors.background.secondary,
    opacity: 0.6,
  },
  otherMonthDayText: {
    color: theme.colors.text.secondary,
    opacity: 0.7,
  },
});
