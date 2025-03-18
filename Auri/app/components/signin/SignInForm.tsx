import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Mail, Lock, Check, Eye, EyeOff } from "lucide-react-native";
import Button from "../ui/Button";
import theme from "@/app/theme/justin-theme";

/**
 * SignInForm Component
 *
 * A form component for user authentication with email and password,
 * including remember me checkbox and forgot password link.
 *
 * @example
 * <SignInForm
 *   onSignIn={handleSignIn}
 *   onForgotPassword={handleForgotPassword}
 * />
 */

interface SignInFormProps {
    /** Function called when the sign in button is pressed */
    onSignIn?: (email: string, password: string, rememberMe: boolean) => void;
    /** Function called when the forgot password link is pressed */
    onForgotPassword?: () => void;
}

export default function SignInForm({
    onSignIn = () => {},
    onForgotPassword = () => {},
}: SignInFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignIn = () => {
        onSignIn({ email, password, rememberMe });
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            {/* Input Fields */}
            <View style={styles.inputsContainer}>
                {/* Email Input */}
                <View style={styles.inputField}>
                    <View style={styles.iconContainer}>
                        <Mail width={24} height={24} color={theme.colors.text.secondary} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        placeholderTextColor={theme.colors.text.secondary}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoComplete="email"
                    />
                </View>

                {/* Password Input */}
                <View style={styles.inputField}>
                    <View style={styles.iconContainer}>
                        <Lock width={24} height={24} color={theme.colors.text.secondary} />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        placeholderTextColor={theme.colors.text.secondary}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={styles.eyeIcon}
                        onPress={toggleShowPassword}
                        accessibilityLabel={showPassword ? "Hide password" : "Show password"}
                    >
                        {showPassword ? (
                            <EyeOff width={24} height={24} color={theme.colors.text.secondary} />
                        ) : (
                            <Eye width={24} height={24} color={theme.colors.text.secondary} />
                        )}
                    </TouchableOpacity>
                </View>

                {/* Remember Me & Forgot Password */}
                <View style={styles.optionsRow}>
                    <TouchableOpacity
                        style={styles.rememberMeContainer}
                        onPress={toggleRememberMe}
                        accessibilityRole="checkbox"
                        accessibilityState={{ checked: rememberMe }}
                    >
                        <View
                            style={[
                                styles.checkbox,
                                {
                                    backgroundColor: rememberMe
                                        ? theme.colors.primary.main
                                        : "transparent",
                                },
                            ]}
                        >
                            {rememberMe && (
                                <Check
                                    width={16}
                                    height={16}
                                    color={theme.colors.text.white}
                                    strokeWidth={2}
                                />
                            )}
                        </View>
                        <Text style={styles.rememberMeText}>Remember me</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onForgotPassword} accessibilityRole="button">
                        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Sign In Button */}
            <Button label="Sign in" onPress={handleSignIn} accessibilityLabel="Sign in button" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: theme.spacing.lg,
    },
    inputsContainer: {
        gap: theme.spacing.md,
    },
    inputField: {
        width: "100%",
        padding: theme.spacing.inputPadding,
        backgroundColor: theme.colors.background.secondary,
        borderRadius: theme.borderRadius.md,
        borderWidth: 1,
        borderColor: theme.colors.border,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        height: 56, // Fixed height for better touch target
    },
    iconContainer: {
        width: 24,
        height: 24,
        overflow: "hidden",
    },
    input: {
        flex: 1,
        color: theme.colors.text.primary,
        fontSize: theme.typography.fontSize.md,
        fontWeight: theme.typography.fontWeight.medium,
        fontFamily: theme.typography.fontFamily.primary,
    },
    eyeIcon: {
        padding: 5,
    },
    inputText: {
        color: theme.colors.text.secondary,
        fontSize: theme.typography.fontSize.md,
        fontWeight: theme.typography.fontWeight.medium,
        fontFamily: theme.typography.fontFamily.primary,
    },
    optionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
    },
    rememberMeContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: theme.borderRadius.sm,
        borderWidth: 1,
        borderColor: theme.colors.border,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    rememberMeText: {
        color: theme.colors.text.primary,
        fontSize: theme.typography.fontSize.md,
        fontWeight: theme.typography.fontWeight.medium,
        fontFamily: theme.typography.fontFamily.primary,
    },
    forgotPasswordText: {
        color: theme.colors.text.primary,
        fontSize: theme.typography.fontSize.md,
        fontWeight: theme.typography.fontWeight.medium,
        fontFamily: theme.typography.fontFamily.primary,
    },
});
