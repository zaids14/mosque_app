import React from 'react';
import { View, Text,Image, StyleSheet,TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

const IntroScreens = ({ navigation }) => {

  const handleskip = () => {
    navigation.navigate('Login');
  };

  return (
    <Swiper loop={false} showsButtons={true} onIndexChanged={(index) => {
      if (index === 2) {
        navigation.navigate('Login');
      }
    }}>
      <View style={styles.slide}>
        <TouchableOpacity onPress={handleskip} style={styles.skipButton}>
        <Text style={styles.skip}>Skip &gt;</Text>
        </TouchableOpacity>
        <Image source={require('../assets/Intro1.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to Our Masjid App</Text>
        <Text style={styles.text}>Discover and connect with your local masjid community.</Text>
      </View>
      <View style={styles.slide}>
        <TouchableOpacity onPress={handleskip} style={styles.skipButton}>
        <Text style={styles.skip}>Skip &gt;</Text>
        </TouchableOpacity>       
        <Image source={require('../assets/calendar.png')} style={styles.logo} />
        <Text style={styles.title}>Stay Updated with Events</Text>
        <Text style={styles.text}>Get notified about upcoming prayers, events, and gatherings.</Text>
      </View>
      <View style={styles.slide}>
        <TouchableOpacity onPress={handleskip} style={styles.skipButton}>
        <Text style={styles.skip}>Skip &gt;</Text>
        </TouchableOpacity>        
        <Image source={require('../assets/charity.png')} style={styles.logo} />
        <Text style={styles.title}>Support Through Donations</Text>
        <Text style={styles.text}>Contribute to our masjid and community.</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 50, 
    right: 30, 
    padding: 10, 
  },
  skip: {
    fontSize: 16,
    color: '#000', 
    textDecorationLine:'underline'
  },
  logo: {
    width: 250,  
    height: 250,  
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default IntroScreens;
