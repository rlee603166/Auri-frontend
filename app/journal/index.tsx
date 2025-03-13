import React from "react";
import { View, TextInput, ScrollView, StyleSheet } from "react-native";
import JournalHeader from "@/components/journal/JournalHeader";
import Button from "@/components/ui/Button";
import theme from "@/theme";

/**
 * JournalEntryScreen Component
 *
 * A journal entry screen for the application featuring a text input area
 * for users to write their thoughts and an AI Insights button at the bottom.
 *
 * The screen includes:
 * - A header with video and audio recording options
 * - A large text area for writing journal entries
 * - An AI Insights button to analyze the journal content
 *
 * @example
 * <JournalEntryScreen />
 */
export default function JournalEntryScreen() {
  return (
    <View style={styles.container}>
      {/* Header with Video and Audio Icons */}
      <JournalHeader />

      {/* Journal Entry Area */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.journalCard}>
          <TextInput
            style={styles.journalInput}
            placeholder="What's on your mind?"
            placeholderTextColor={theme.colors.text.secondary}
            multiline
          />
        </View>
      </ScrollView>

      {/* AI Insights Button */}
      <View style={styles.buttonContainer}>
        <Button
          label="AI Insights"
          accessibilityLabel="AI Insights button"
          style={styles.insightsButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.background.main,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: 10,
  },
  journalCard: {
    padding: 25,
    backgroundColor: theme.colors.background.main,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.medium,
    minHeight: 500,
  },
  journalInput: {
    color: theme.colors.text.secondary,
    fontSize: theme.typography.fontSize.md,
    fontFamily: theme.typography.fontFamily.primary,
    textAlignVertical: "top",
  },
  buttonContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: 5,
    marginBottom: 24,
  },
  insightsButton: {
    height: 48,
    backgroundColor: theme.colors.primary.main,
    borderRadius: theme.borderRadius.sm,
    ...theme.shadows.small,
  },
});
