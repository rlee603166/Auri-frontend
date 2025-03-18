import { Text, View, StyleSheet } from "react-native";
import WelcomeScreen from "./welcome";
import SignInScreen from "./signin";

const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <WelcomeScreen />
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

export default AuthScreen;
