import { Text, View } from "react-native";
import { useEffect } from "react";
import { config } from "./config";

export default function Index() {
    useEffect(() => {
        console.log(config);
    }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
