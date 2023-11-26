import { StyleSheet, Text, View } from "react-native";

const Heading = () => {
  return (
    <View style={viewvar.viewvarq}>
      <Text style={styles1.container}>Hello World!</Text>
      <Text style={styles2.container}>From: Muhammad Arham</Text>
      <Text>This is my First React App</Text>
    </View>
  );
};

export default Heading;

const viewvar = StyleSheet.create({
  viewvarq: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles1 = StyleSheet.create({
  container: {
    color: "white",
    fontWeight: "bold",
  },
});
const styles2 = StyleSheet.create({
  container: {
    color: "white",
    fontWeight: "bold",
  },
});
