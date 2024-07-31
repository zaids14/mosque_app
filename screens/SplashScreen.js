import React, { useEffect } from 'react';
import { View, Text,Image, StyleSheet, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Intro');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>اَلسَلامُ عَلَيْكُم</Text>
        <Image source={require('../assets/splashscreen.png')} style={styles.logo} />
      <Text style={styles.title}>Masjid App</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9292FD',
  },
  logo: {
    width: 200,  
    height: 200,  
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default SplashScreen;
