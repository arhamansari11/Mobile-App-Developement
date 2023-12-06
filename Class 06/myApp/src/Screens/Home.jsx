import {View, Text, Button} from 'react-native';
import React from 'react';

const Home = props => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => props.navigation.navigate('About')}
        title="Go to About"
      />
    </View>
  );
};

export default Home;
