// app/tabs/_layout.tsx
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import JournalEntryScreen from "../screens/upload/journal";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function TabsLayout() {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            initialRouteName="upload"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingBottom: insets.bottom,
                    height: 49 + insets.bottom,
                },
            }}
        >
            <Tab.Screen
                name="calendar"
                component={require("../screens/calendar/CalendarScreen").default}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "calendar" : "calendar-outline"}
                            size={size}
                            color={"black"}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="upload"
                component={require("../screens/upload/UploadScreen").default}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={size}
                            color={"black"}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="analytics"
                component={require("../screens/analytics/AnalyticsScreen").default}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? "stats-chart" : "stats-chart-outline"}
                            size={size}
                            color={"black"}
                        />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

