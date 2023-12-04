import { View, Text, Button } from "react-native";
import React from "react";

const Notification = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
         style={{
          color:"white"
        }}>Notification</Text>
      <Button onPress={() => navigation.navigate("Home")} title="Go to Home" />
    </View>
  );
};

export default Notification;
