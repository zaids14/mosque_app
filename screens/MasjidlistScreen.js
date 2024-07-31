import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';

const masjidData = [
  { id: '1', name: 'Ayesha Masjid', location: 'Malad', distance: '500 m', image: require('../assets/blue.jpg') },
  { id: '2', name: 'Darul-falah Masjid', location: 'Malad', distance: '800 m', image: require('../assets/detail.jpg') },
  { id: '3', name: 'Inaam Masjid', location: 'Malad', distance: '1 km', image: require('../assets/new.jpeg') },
  { id: '4', name: 'Madina Masjid', location: 'Malad', distance: '200 m', image: require('../assets/madina.jpg') },
];

const MasjidlistScreen = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = masjidData.filter(masjid =>
    masjid.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const viewInfo = () => {
    navigation.navigate('MasjidDetails');
  };

  const savePreference = () => {
    navigation.navigate('Homepage');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.box} onPress={viewInfo}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.distance}>{item.distance}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchValue}
        onChangeText={setSearchValue}
      />
      <Text style={styles.result}>Searching for: {searchValue}</Text>

      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.button} onPress={viewInfo}>
        <Text style={styles.buttonText}>View Info</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={savePreference}>
        <Text style={styles.buttonText}>Save Preferences</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 16,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  distance: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#34B7F1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MasjidlistScreen;
