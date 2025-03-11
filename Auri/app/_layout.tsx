// app/_layout.tsx
import { Stack, useRouter, useRootNavigationState } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const navigationState = useRootNavigationState();

    useEffect(() => {
        if (!navigationState?.key) return;

        const checkAuth = async () => {
            const loggedIn = true;
            setIsAuthenticated(loggedIn);

            if (loggedIn) {
                router.replace("/tabs");
            } else {
                router.replace("/auth");
            }
        };

        checkAuth();
    }, [navigationState?.key]);

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="auth" />
            <Stack.Screen name="tabs" />
        </Stack>
    );
}
