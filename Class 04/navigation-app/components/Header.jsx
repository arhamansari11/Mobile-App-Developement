import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



const Header = () => {
  return (
    <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
    <TouchableOpacity
      onPress={() => alert('This is a button!')}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Info</Text>
    </TouchableOpacity>
  </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
  });