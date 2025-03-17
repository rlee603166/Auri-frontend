import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Video, Mic } from "lucide-react-native";
import IconButton from "../ui/IconButton";
import { Ionicons } from "@expo/vector-icons";
import theme from "@/app/theme/justin-theme";
import { router } from "expo-router";

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
    /** Function called to save and close the journal entry */
    handleSave?: () => void;
}

export default function JournalHeader({
    onVideoPress = () => {},
    onAudioPress = () => {},
    handleSave = () => { router.back() },
}: JournalHeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSave}>
                <Ionicons name={"close"} size={26} color={"black"} />
            </TouchableOpacity>

            {/* Video Icon */}
            <View style={styles.inputContainer}>
                <IconButton
                    icon={<Video width={24} height={24} color={theme.colors.text.primary} />}
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 28,
        paddingHorizontal: theme.spacing.xl,
        paddingTop: 64,
        paddingBottom: 19,
        height: 107,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
