import * as React from "react";
// import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//Bottom Tabs
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

// Stack Tabs
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();

// Top Tabs
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// const Tab = createMaterialTopTabNavigator();

import Home from "../components/Home";
import Profile from "../components/Profile";
import Notification from "../components/Notification";

const Navigation = () => {
  return (
    // Stack Navigation

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //     <Stack.Screen name="Notification" component={Notification}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    
    // Top Tabs like Whastapp

    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Home" component={Home} />
    //     <Tab.Screen name="Profile" component={Profile} />
    //     <Tab.Screen name="Notification" component={Notification} />
    //   </Tab.Navigator>
    //   <StatusBar hidden={false} />
    // </NavigationContainer>
    

    // Bottom Tabs
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home-outline"; // Change this to the desired icon for Home
            } else if (route.name === "Profile") {
              iconName = "person-outline"; // Change this to the desired icon for Profile
            } else if (route.name === "Notification") {
              iconName = "notifications-outline"; // Change this to the desired icon for Notification
            }

            // You can return any component here that you want as the tab icon.
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
