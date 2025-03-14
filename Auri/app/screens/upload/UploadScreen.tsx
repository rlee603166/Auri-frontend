import { Text, View, StyleSheet } from "react-native";
import JournalEntryScreen from "./journal";

const UploadScreen = () => {
    return (
        <View style={styles.container}>
            <JournalEntryScreen />
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

export default UploadScreen;
