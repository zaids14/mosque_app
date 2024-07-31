import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VerifyOTPScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params;
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    navigation.navigate('MasjidlistScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.edit} onPress={() => navigation.navigate('EnterWhatsAppNumber')} >Edit WhatsApp Number</Text>
      <Text style={styles.subtitle}>Enter the 6-digit code sent to {phoneNumber}</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="OTP"
          value={otp}
          onChangeText={setOtp}
          keyboardType="numeric"
        />
        <Button title="Verify" onPress={handleVerifyOTP} color="#34B7F1" />
      </View>
      <Text style={styles.resend}>Didn't receive any code? Resend Again</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 20, 
    backgroundColor: '#fff',
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 10, 
  },
  edit:{
   marginTop:20,
   color: '#000',
   fontSize:16,
   fontWeight: '500',
   textAlign: 'left',
   textDecorationLine:'underline'

  },
  subtitle: {
    fontSize: 16,
    marginTop: 50,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    maxWidth: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    maxWidth: 300, 
  },
  resend: {
    marginTop: 20,
    textAlign: 'center',
    color: '#3498db',
  },
  
});

export default VerifyOTPScreen;
