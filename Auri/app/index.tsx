import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Welcome to Auri</Text>
            <Link href="/auth">Go to Auth</Link>
        </View>
    );
}
