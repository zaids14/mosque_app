import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MasjidDetailScreen = ({ navigation }) => {
  const donateTo = () => {
    navigation.navigate('DonationLists');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={require('../assets/detail.jpg')} style={styles.image} />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 19.0760,
            longitude: 72.8777,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 19.0760, longitude: 72.8777 }}
            title="Imaan Masjid"
            description="Imaan masjid is situated at malad west area. It is a beautiful mosque built in the 21st century."
          />
        </MapView>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Imaan masjid is situated at malad west area. It is a beautiful mosque built in the 21st century. It has four beautiful pillars and one dome. Muslims offer daily 5 times prayers at this masjid.
        </Text>
        
        <Text style={styles.sectionTitle}>Photo</Text>
        <View style={styles.photoContainer}>
          <Image source={require('../assets/des1.jpeg')} style={styles.photo} />
          <Image source={require('../assets/new.jpeg')} style={styles.photo} />
        </View>

        <TouchableOpacity style={styles.button} onPress={donateTo}>
          <Text style={styles.buttonText}>Donate to this Masjid</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    height: 250,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 100,
    
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#34B7F1',

  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  photoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  photo: {
    width: '49%',
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#34B7F1',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MasjidDetailScreen;






