import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import theme from "@/theme";

/**
 * JournalEntry Component
 *
 * Displays a single journal entry with date, time, summary text, and an image.
 * Includes a bookmark button for saving entries.
 *
 * @example
 * <JournalEntry
 *   date="March 12, 2025"
 *   time="4:00 pm"
 *   summary="TLDR: Today I had a productive meeting with the team."
 *   imageUrl="https://example.com/image.jpg"
 *   onBookmark={() => saveEntry(entryId)}
 * />
 */

interface JournalEntryProps {
  /** Date of the journal entry (e.g., "March 12, 2025") */
  date: string;
  /** Time of the journal entry (e.g., "4:00 pm") */
  time: string;
  /** Summary text of the journal entry */
  summary: string;
  /** URL of the image to display with the entry */
  imageUrl: string;
  /** Function called when the bookmark button is pressed */
  onBookmark?: () => void;
}

export default function JournalEntry({
  date,
  time,
  summary,
  imageUrl,
  onBookmark = () => {},
}: JournalEntryProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dateTime}>
          {date} ({time})
        </Text>
        <TouchableOpacity
          onPress={onBookmark}
          accessibilityRole="button"
          accessibilityLabel="Bookmark entry"
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900195440-node-9292%3A374-1741900194882.png",
            }}
            style={styles.bookmarkIcon}
            accessibilityLabel="Bookmark icon"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.summary}>{summary}</Text>
      <Image
        source={{ uri: imageUrl }}
        style={styles.entryImage}
        accessibilityLabel="Journal entry image"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: theme.spacing.cardPadding,
    backgroundColor: theme.colors.background.main,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.medium,
    gap: theme.spacing.cardPadding,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateTime: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
  summary: {
    width: "100%",
    color: theme.colors.text.secondary,
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
  },
  entryImage: {
    width: "100%",
    height: 100,
    borderRadius: theme.borderRadius.sm,
  },
});
