import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "./home";

const CalendarScreen = () => {
    return (
        <View style={styles.container}>
            <HomeScreen />
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

export default CalendarScreen;
