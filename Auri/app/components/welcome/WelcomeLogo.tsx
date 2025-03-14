import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "@/app/theme/justin-theme";

/**
 * WelcomeLogo Component
 *
 * Displays the application logo and tagline on the welcome screen.
 *
 * @example
 * <WelcomeLogo />
 */

export default function WelcomeLogo() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C150534289-1741899948006-node-9292%3A455-1741899947151.png",
        }}
        style={styles.logo}
        accessibilityLabel="App Logo"
      />
      <Text style={styles.tagline}>See your growth one insight at a time</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 213,
    height: 97,
  },
  tagline: {
    width: 229,
    textAlign: "center",
    color: theme.colors.text.primary,
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.medium,
    fontFamily: theme.typography.fontFamily.primary,
    marginTop: 2,
  },
});
