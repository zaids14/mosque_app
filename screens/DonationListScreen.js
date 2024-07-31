import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';

const DonationListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={require('../assets/new.jpeg')} style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DonationDetails')}>
      <Image source={require('../assets/mosque1.png')} style={styles.buttonImage}></Image>
        <Text style={styles.buttonText}>Monthly Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PendingDonations')}>
      <Image source={require('../assets/Untitled2.jpeg')} style={styles.buttonImage}></Image>
        <Text style={styles.buttonText}>Pending Donations</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MonthlyStatus')}>
      <Image source={require('../assets/6.jpeg')} style={styles.buttonImage}></Image>
        <Text style={styles.buttonText}>Monthly Status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MoreDonation')}>
      <Image source={require('../assets/g.jpeg')} style={styles.buttonImage}></Image>
        <Text style={styles.buttonText}>Donate More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    height: 200,
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

export default DonationListScreen;
