import { View, Text, Button } from "react-native";
import React from "react";

const Profile = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "gray",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text 
      style={{
        color:"white"
      }}>Profile</Text>
      <Button
        onPress={() => navigation.navigate("Notification")}
        title="Go to Notification"
      />
    </View>
  );
};

export default Profile;
