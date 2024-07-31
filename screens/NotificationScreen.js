import React from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MonthlyDetails')}>
      <Image source={require('../assets/dont.jpg')} style={styles.buttonImage}></Image>
      <Text style={styles.buttonText}>Masjid Donation Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PendingDonations')}>
      <Image source={require('../assets/ramzan.jpg')} style={styles.buttonImage}></Image>
      <Text style={styles.buttonText}>Ramzan Donations Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MonthlyStatus')}>
      <Image source={require('../assets/zakat.jpg')} style={styles.buttonImage}></Image>
      <Text style={styles.buttonText}>Special Charity Event</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoreDonation')}>
      <Image source={require('../assets/overdue.png')} style={styles.buttonImage}></Image>
      <Text style={styles.buttonText}>Masjid Donation Overdue</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoreDonation')}>
      <Image source={require('../assets/subs.jpg')} style={styles.buttonImage}></Image>
      <Text style={styles.buttonText}>Subscribe for Masjid Updates </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    height: 100, 
  },
  buttonImage: {
    width: '30%', 
    height: '100%', 
    resizeMode: 'cover', 
    borderRadius: 15, 
  },
  buttonText: {
    flex: 1, 
    textAlign: 'center', 
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
