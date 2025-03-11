import { Text, View, StyleSheet } from "react-native";


const WelcomeScreen = () => {

    return (
        <View style={styles.contianer} >
            <Text>Hello from the Welcome Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default WelcomeScreen;
