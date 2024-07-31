import React from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';

const MessageScreen = ({ }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
      <Image source={require('../assets/donationbox.jpg')} style={styles.image}></Image>
      </View>
      <Text style={styles.description}>Thankyou,for your Donation.
       May your deeds be accepted as good deed's and Meaningful to Others.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  description:{
    fontSize: 26,
    fontweight: 'normal',
    fontFamily: 'sans-serif',
    marginTop: 90,
    justifyContent: 'center',
    padding: 10,
  },

  imageBox: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 250,
  },
});

export default MessageScreen;
