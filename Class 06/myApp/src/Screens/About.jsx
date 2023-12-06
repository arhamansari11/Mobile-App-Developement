import {View, Text, Button} from 'react-native';
import React from 'react';

const About = ({navigation}) => {
  return (
    <View>
      <Text>About</Text>
      <Button
        onPress={() => navigation.navigate('Contact')}
        title="Go to Contact"
      />
    </View>
  );
};

export default About;
