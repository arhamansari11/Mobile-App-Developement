// Buttons in React Native


// import React from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native';

// const Separator = () => <View style={styles.separator} />;

// const Buttonsnative = () => (
//   <SafeAreaView style={styles.container}>
//     <View>
//       <Text style={styles.title}>
//         The title and onPress handler are required. It is recommended to set
//         accessibilityLabel to help make your Buttonsnative usable by everyone.
//       </Text>
//       <Button
//         title="Press me"
//         onPress={() => Alert.alert('Simple Button pressed')}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         Adjust the color in a way that looks standard on each platform. On iOS,
//         the color prop controls the color of the text. On Android, the color
//         adjusts the background color of the button.
//       </Text>
//       <Button
//         title="Press me"
//         color="#f194ff"
//         onPress={() => Alert.alert('Button with adjusted color pressed')}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         All interaction for the component are disabled.
//       </Text>
//       <Button
//         title="Press me"
//         disabled
//         onPress={() => Alert.alert('Cannot press this one')}
//       />
//     </View>
//     <Separator />
//     <View>
//       <Text style={styles.title}>
//         This layout strategy lets the title define the width of the button.
//       </Text>
//       <View style={styles.fixToText}>
//         <Button
//           title="Left button"
//           onPress={() => Alert.alert('Left button pressed')}
//         />
//         <Button
//           title="Right button"
//           onPress={() => Alert.alert('Right button pressed')}
//         />
//       </View>
//     </View>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     marginHorizontal: 16,
//   },
//   title: {
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   fixToText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: '#737373',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//   },
// });

// export default Buttonsnative;





// Background Image


// import React from 'react';
// import { ImageBackground, StyleSheet, Text, View } from 'react-native';

// // Require the image from the assets folder
// const icon = require('../assets/icon.png');

// const Buttonsnative = () => (
//   <View style={styles.container}>
//     <ImageBackground source={icon} resizeMode="contain" style={styles.image}>
//       <Text style={styles.text}>Photo ha bro</Text>
//     </ImageBackground>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
// });

// export default Buttonsnative;





// Image in React Native

// import React from 'react';
// import { View, Image, StyleSheet ,Text } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     alignItems: 'center', 
//     justifyContent:'center'
//   },
//   tinyLogo: {
//     width: 50,
//     height: 50,
//     marginTop:50
//   },
// });

// const Buttonsnative = () => {
//   return (
//     <View style={styles.container}>
//       {/* Use require with relative path */}
//       <Image style={styles.tinyLogo} source={require('../assets/icon.png')} />
//       <Image
//         style={styles.tinyLogo}
//         source={{
//           uri: 'https://reactnative.dev/img/tiny_logo.png',
//         }}
//       />
//       <Text>
        
//       </Text>
//     </View>
//   );
// };

// export default Buttonsnative;





// Scroll View


import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const Buttonsnative = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'pink',
  },
  scrollView: {
    marginLeft:20
  },
  text: {
    fontSize: 42,
  },
});

export default Buttonsnative;