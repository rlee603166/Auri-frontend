import { View, Text, StyleSheet } from "react-native";

const AnalyticsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello from Analytics Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default AnalyticsScreen;
