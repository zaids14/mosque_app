import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [pincode, setPincode] = useState('');
  const [gender, setGender] = useState('');

  const handleRegistration = () => {
    navigation.navigate('Masjidlist'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/login.png')} style={styles.logo} />
        <Text style={styles.title}>Get Started</Text>
        <Text style={styles.subtitle}>By creating a free account</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
      <Button title="Register" onPress={handleRegistration} color="#34B7F1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    padding: 30,
    backgroundColor: '#fff',
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 50, 
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  title: {
    position: 'absolute',
    top: '48%', 
    left: '75%',
    transform: [{ translateX: -125 }],
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black', 
  },
  subtitle: {
    position: 'absolute',
    top: '65%', 
    left: '65%',
    transform: [{ translateX: -125 }],
    fontSize: 16,
    textAlign: 'center',
    color: 'black', 
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden', 
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default RegistrationScreen;
