import { View, Text, Button } from "react-native";
import React from "react";

const Home = (props) => {
  return (
    <View
      style={{
        backgroundColor: "lightyellow",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Button
        onPress={() => props.navigation.navigate("Profile")}
        title="Go to Profile"
      />
    </View>
  );
};

export default Home;
