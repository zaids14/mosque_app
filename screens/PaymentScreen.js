import React from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Scan QR Code</Text>
       <View style={styles.imageBox}>
       <Image source={require('../assets/QR.png')} style={styles.image}></Image>
       </View>
       <View style={styles.buttonBox}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Download')}>
      <Ionicons name="download-outline" color='#000' size={30} />
      <Text style={styles.buttonText}>Download QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Share')}>
      <Ionicons name="share-social-sharp" color='#000' size={30} />
      <Text style={styles.buttonText}>Share QR Code</Text>
      </TouchableOpacity>
      </View>
       <View style={styles.paybutton}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Messages')}>
      <Ionicons name="cash-outline" color='#000' size={30} />
        <Text style={styles.buttonText}>PAY</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text:{
    fontSize: 30,
    fontweight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
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
    height: 350,
  },
  buttonBox:{
    marginTop: 25,
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
    width: 50, 
    height: 50, 
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
  paybutton:{
    marginTop: 40,
  }
});

export default PaymentScreen;
