import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./src/Components/Heading";

export default function App() {
  return (
    <View style={styles.container}>
      <Heading />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
