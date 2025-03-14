// app/tabs/_layout.tsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
    return (
        <Tab.Navigator
            initialRouteName="upload"
            screenOptions={{
                tabBarShowLabel: false,
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
                            name={focused ? "add-circle" : "add-circle-outline"}
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
