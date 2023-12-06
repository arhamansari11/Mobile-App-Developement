import {View, Text, Button} from 'react-native';
import React from 'react';

const Contact = props => {
  const onPressHandler = () => {
    props.navigation.goBack();
  };
  return (
    <View>
      <Text>Contact</Text>
      <Button onPress={onPressHandler} title="Go Back" />
    </View>
  );
};

export default Contact;
