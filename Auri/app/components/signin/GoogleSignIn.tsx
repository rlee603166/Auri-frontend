import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Button from "../ui/Button";
import Divider from "../ui/Divider";
import theme from "@/app/theme/justin-theme";
import googleIcon from "@/assets/images/google.webp";

/**
 * GoogleSignIn Component
 *
 * A component that provides a button for signing in with Google.
 *
 * @example
 * <GoogleSignIn onGoogleSignIn={handleGoogleSignIn} />
 */
interface GoogleSignInProps {
    onGoogleSignIn?: () => void;
}

export default function GoogleSignIn({ onGoogleSignIn = () => {} }: GoogleSignInProps) {
    return (
        <View style={styles.container}>
            <Divider text="Or continue with" />
            <View style={styles.buttonContainer}>
                <View style={styles.googleButtonWrapper}>
                    <Button
                        label="Sign in with Google"
                        variant="outline"
                        onPress={onGoogleSignIn}
                        accessibilityLabel="Sign in with Google button"
                        style={styles.googleButton}
                        textStyle={styles.googleButtonText}
                    />
                    <Image source={googleIcon} style={styles.googleIcon} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: theme.spacing.lg,
    },
    buttonContainer: {
        marginTop: theme.spacing.md,
    },
    googleButtonWrapper: {
        position: "relative",
        width: "100%",
    },
    googleButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 40,
    },
    googleButtonText: {
        color: theme.colors.text.primary,
    },
    googleIcon: {
        position: "absolute",
        left: 20,
        top: "50%",
        marginTop: -10,
        width: 20,
        height: 20,
    },
});
