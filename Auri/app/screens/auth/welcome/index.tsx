import React from "react";
import { View, StyleSheet } from "react-native";
import WelcomeLogo from "@/app/components/welcome/WelcomeLogo";
import WelcomeActions from "@/app/components/welcome/WelcomeActions";
import { router } from "expo-router";

/**
 * WelcomeScreen Component
 *
 * A welcome/splash screen for the application featuring a logo,
 * tagline, and action buttons for sign in and getting started.
 */
export default function WelcomeScreen() {
    const onSignIn = () => {
        router.push("/screens/auth/signin");
    }
    return (
        <View style={styles.container}>
            {/* Logo and Tagline Section */}
            <View style={styles.logoContainer}>
                <WelcomeLogo />
            </View>

            {/* Action Buttons Section */}
            <WelcomeActions onSignIn={onSignIn}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 20,
        paddingVertical: 24,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
