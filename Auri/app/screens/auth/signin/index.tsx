import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SignInForm from "@/app/components/signin/SignInForm";
import GoogleSignIn from "@/app/components/signin/GoogleSignIn";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import theme from "@/app/theme/justin-theme";

/**
 * SignInScreen Component
 *
 * A sign-in screen featuring email/password inputs,
 * Google sign-in option, and account creation link.
 */

interface SignIn {
    email: string;
    password: string;
    rememberMe: boolean;
}

export default function SignInScreen() {
    const handleSignIn = (data: SignIn) => {
        // Sign in logic
        console.log(JSON.stringify(data, null, 2));
    };

    const handleCreateAccount = () => {
        // Create account navigation
    };

    return (
        <View style={styles.container}>
            {/* Close Button */}
            <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
                <Ionicons name="close" size={26} color="black" />
            </TouchableOpacity>

            <View style={styles.content}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome Back</Text>
                    <Text style={styles.subtitle}>Sign in to your account</Text>
                </View>

                {/* Form Section */}
                <View style={styles.formContainer}>
                    <SignInForm onSignIn={handleSignIn} onForgotPassword={() => {}} />
                </View>

                {/* Google Sign In */}
                <View style={styles.googleContainer}>
                    <GoogleSignIn />
                </View>

                {/* Create Account Link */}
                <View style={styles.createAccountContainer}>
                    <TouchableOpacity onPress={handleCreateAccount}>
                        <Text style={styles.createAccountText}>
                            <Text style={styles.notMemberText}>Not a member? </Text>
                            <Text style={styles.createNewText}>Create new account</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        position: "relative",
    },
    closeButton: {
        position: "absolute",
        top: 50,
        left: 20,
        zIndex: 10,
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    content: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 24,
        paddingTop: 100,
        gap: 30,
        justifyContent: "center",
    },
    header: {
        width: "100%",
        alignItems: "center",
        gap: 8,
        marginBottom: 10,
    },
    title: {
        textAlign: "center",
        color: "#222222",
        fontSize: 28,
        fontWeight: "600",
        fontFamily: "Inter",
    },
    subtitle: {
        textAlign: "center",
        color: "#777777",
        fontSize: 16,
        fontWeight: "500",
        fontFamily: "Inter",
    },
    formContainer: {
        width: "100%",
        marginBottom: 20,
    },
    googleContainer: {
        width: "100%",
        marginTop: 10,
    },
    createAccountContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    createAccountText: {
        textAlign: "center",
    },
    notMemberText: {
        color: "#777777",
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Inter",
    },
    createNewText: {
        color: theme.colors.primary.main || "#0066FF",
        fontSize: 16,
        fontWeight: "600",
        fontFamily: "Inter",
    },
});
