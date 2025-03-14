import React from "react";
import { View, StyleSheet } from "react-native";
import { Video, Mic } from "lucide-react-native";
import IconButton from "../ui/IconButton";
import theme from "@/app/theme/justin-theme";

/**
 * JournalHeader Component
 *
 * A header component for the journal entry screen with buttons for
 * recording video and audio entries.
 *
 * @example
 * <JournalHeader
 *   onVideoPress={() => startVideoRecording()}
 *   onAudioPress={() => startAudioRecording()}
 * />
 */

interface JournalHeaderProps {
  /** Function called when the video recording button is pressed */
  onVideoPress?: () => void;
  /** Function called when the audio recording button is pressed */
  onAudioPress?: () => void;
}

export default function JournalHeader({
  onVideoPress = () => {},
  onAudioPress = () => {},
}: JournalHeaderProps) {
  return (
    <View style={styles.container}>
      {/* Video Icon */}
      <IconButton
        icon={
          <Video width={24} height={24} color={theme.colors.text.primary} />
        }
        onPress={onVideoPress}
        accessibilityLabel="Record video"
      />

      {/* Audio Icon */}
      <IconButton
        icon={<Mic width={24} height={24} color={theme.colors.text.primary} />}
        onPress={onAudioPress}
        accessibilityLabel="Record audio"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 28,
    paddingHorizontal: theme.spacing.xl,
    paddingTop: 64,
    paddingBottom: 19,
    height: 107,
  },
});
