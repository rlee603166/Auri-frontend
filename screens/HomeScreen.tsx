import React from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import DateNavigation from "@/components/home/DateNavigation";
import ActivityCard from "@/components/home/ActivityCard";
import JournalEntry from "@/components/home/JournalEntry";
import BottomNavigation from "@/components/home/BottomNavigation";
import theme from "@/theme";

/**
 * HomeScreen Component
 *
 * The main home screen of the application featuring a date navigation bar,
 * activity cards, and journal entries.
 *
 * @example
 * <HomeScreen />
 */
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header with Date Navigation */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <DateNavigation currentDate="Today" />
          <View style={styles.iconContainer}>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900193429-node-9292%3A353-1741900192896.png",
              }}
              style={styles.icon}
              accessibilityLabel="Settings icon"
            />
          </View>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollView}>
        {/* Activity Cards Section */}
        <View style={styles.cardsSection}>
          <ActivityCard
            title="Daily Activity"
            description="Completed 5,000 steps today"
            iconUrl="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900194440-node-9292%3A374-1741900194882.png"
          />
        </View>

        {/* Journal Entries Section */}
        <View style={styles.journalSection}>
          {/* Journal Entry 1 */}
          <JournalEntry
            date="March 14, 2025"
            time="2:00 pm"
            summary="TLDR: Had a productive meeting with the team about the new project. Everyone is excited to get started."
            imageUrl="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900194440-node-9292%3A374-1741900194882.png"
          />

          {/* Journal Entry 2 */}
          <JournalEntry
            date="March 13, 2025"
            time="12:30 pm"
            summary="TLDR: Had lunch with colleagues at the new restaurant downtown. The food was excellent and the conversation was engaging."
            imageUrl="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900196089-node-9292%3A382-1741900195536.png"
          />

          {/* Journal Entry 3 */}
          <JournalEntry
            date="March 12, 2025"
            time="9:00 am"
            summary="TLDR: Morning workout followed by a healthy breakfast. Started the day with positive energy and clear goals."
            imageUrl="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741900197427-node-9292%3A391-1741900196921.png"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomNavigation activeTab="home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "column",
  },
  header: {
    height: 112,
    paddingHorizontal: 20,
    paddingTop: 64,
    paddingBottom: 24,
  },
  headerContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  icon: {
    width: 24,
    height: 24,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  cardsSection: {
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 16,
    gap: 24,
  },
  journalSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 24,
  },
});
