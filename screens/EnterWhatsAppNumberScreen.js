import React, { useState } from 'react';
import { View, Text, TextInput, Button,TouchableOpacity, StyleSheet, Image,Switch } from 'react-native';

const EnterWhatsAppNumberScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    navigation.navigate('VerifyOTP', { phoneNumber });
  };
  const [isOptIn, setIsOptIn] = useState(false);

  const toggleSwitch = (value) => {
    setIsOptIn(value);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        We'll check if you have an account, and help create one if you don't.
      </Text>
      <Text style={styles.subtitle1}>Enter your Whatsapp number</Text>
      <TextInput
        style={styles.input}
        placeholder="WhatsApp Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style= {styles.titletext}>
        <Image source={require('../assets/whatsapp.png')} style={styles.titleImage} />
        <Text style={styles.title}>Opt-in Whatsapp message</Text>
        <Switch
          style={styles.switch}
          onValueChange={toggleSwitch}
          value={isOptIn}
        />
      </TouchableOpacity>
      <Button title="Send OTP" onPress={handleSendOTP} style={styles.button} color="#34B7F1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 24,
    backgroundColor: '#fff',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  titletext: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    marginTop: 20,
  },
  switch:{
    marginLeft: 'auto',
  },
  titleImage: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default EnterWhatsAppNumberScreen;





