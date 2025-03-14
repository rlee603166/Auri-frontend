import React, { useEffect, useState } from "react";
import { TouchableOpacity, StyleSheet, Keyboard, Platform } from "react-native";
import { Plus } from "lucide-react-native";
import { useRouter } from "expo-router";
import theme from "@/theme";

interface FloatingActionButtonProps {
  /** Function called when the button is pressed */
  onPress?: () => void;
  /** Color of the button background */
  backgroundColor?: string;
  /** Color of the icon */
  iconColor?: string;
}

export default function FloatingActionButton({
  onPress,
  backgroundColor = theme.colors.primary.main,
  iconColor = theme.colors.text.white,
}: FloatingActionButtonProps) {
  const router = useRouter();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      (e) => {
        setKeyboardHeight(e.endCoordinates.height);
      },
    );

    const keyboardWillHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push("/journal");
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor },
        { bottom: 95 + keyboardHeight }, // Adjusted to be above navigation with more space
      ]}
      onPress={handlePress}
      accessibilityRole="button"
      accessibilityLabel="Add new journal entry"
    >
      <Plus width={24} height={24} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    right: 20,
    bottom: 95, // Positioned above the bottom navigation bar with more space
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    ...theme.shadows.medium,
  },
});
