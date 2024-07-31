import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('EnterWhatsAppNumber');
  };

  const handleRegister = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../assets/login.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Sign in to access your account</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Image source={require('../assets/whatsapp.png')} style={styles.buttonImage} />
        <Text style={styles.buttonText}>Continue with WhatsApp Number</Text>
      </TouchableOpacity>

      <Text style={styles.terms}>By signing up you agree to our Privacy Policy and terms</Text>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.register}>New Member? Register now</Text>
      </TouchableOpacity>
  
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      paddingTop: 100,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    logoContainer: {
      position: 'relative',
      width: 250,
      height: 250,
    },
    logo: {
      width: '100%',
      height: '100%',
    },
    title: {
      position: 'absolute',
      top: '52%', 
      left: '85%',
      transform: [{ translateX: -125 }],
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black', 
    },
    subtitle: {
      position: 'absolute',
      top: '70%', 
      left: '60%',
      transform: [{ translateX: -125 }],
      fontSize: 16,
      textAlign: 'center',
      color: 'black', 
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#34B7F1',
      padding: 12,
      borderRadius: 5,
      marginTop:80
    },
    buttonImage: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    terms: {
      marginTop: 30,
      textAlign: 'center',
      color: '#7f8c8d',
    },
    register: {
      marginTop: 100,
      textAlign: 'center',
      color: '#3498db',
      textDecorationLine: 'underline',
    },
  });
  
  export default LoginScreen;