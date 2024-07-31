import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
 

const DonationDetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
         <Image source={require('../assets/donationdetail.jpg')} style={styles.image} />
        </View>
        <View style={styles.details}>
      <View style={styles.row}>
        <Text style={styles.label}>Donation:</Text>
        <Text style={styles.value}>Mosque Contact Person</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Postal code:</Text>
        <Text style={styles.value}>400066</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mosque:</Text>
        <Text style={styles.value}>Imaan Masjid</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Opening Time:</Text>
        <Text style={styles.value}>5 am</Text>
      </View>
    </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payments')}>
      <Ionicons name="cash-outline" color='#000' size={24} />
        <Text style={styles.text} >Donate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notifications')}>
      <Ionicons name="notifications-circle-outline" color='#000' size={24} />
        <Text style={styles.text}>Set Reminder</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} >
      <Ionicons name="document-attach-outline" color='#000' size={24} />
      <Text style={styles.buttonText}>Upload Receipt</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop:50,
    marginBottom: 50,
    width: '100%',
    height: 100, 
  },
  image: {
    width: 200,
    height: 200,
    borderRadius:100,
  },
  details: {
    flex: 1,
    padding: 16,
    marginTop: 50,
    // backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  value: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    height: 50, 
  },
  buttonImage: {
    width: 40, 
    height: 40, 
    resizeMode: 'cover', 
    borderRadius: 15, 
  },
  text:{
    flex: 2, 
    textAlign: 'center', 
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    flex: 1, 
    textAlign: 'center', 
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DonationDetailScreen;
