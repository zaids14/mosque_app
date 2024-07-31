import React from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';
import SwitchSelector from "react-native-switch-selector";

const HomepageScreen = ({ navigation }) => {

    const switchoptions = [
        { label: "My Preferences", value: "my preferences", imageIcon: require('../assets/user.png') },
        { label: "Others", value: "others", imageIcon: require('../assets/application.png') },
    ]; 
    
  return (
      <View style={styles.container}>
              <View style={styles.logoContainer}>
                  <Image source={require('../assets/pngtree.jpg')} style={styles.image}></Image>
                  <Text style={styles.reminder}>There is Ijtema scheduled 
                    on next sunday at Inaam masjid.</Text>
              </View>

              <SwitchSelector style={styles.selector}
                  options={switchoptions}
                  initial={0}
                  onPress={(value) => console.log(value)} />

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Share')}>
                      <Image source={require('../assets/blue.jpg')} style={styles.buttonImage}></Image>
                      <Text style={styles.buttonText}>Inaam masjid</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Share')}>
                      <Image source={require('../assets/detail.jpg')} style={styles.buttonImage}></Image>
                      <Text style={styles.buttonText}>Darul-Falah masjid</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Share')}>
                      <Image source={require('../assets/new.jpeg')} style={styles.buttonImage}></Image>
                      <Text style={styles.buttonText}>Ayesha masjid</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Message')}>
                      <Image source={require('../assets/madina.jpg')} style={styles.buttonImage}></Image>
                      <Text style={styles.buttonText}>Madina masjid</Text>
                  </TouchableOpacity>

          </View>
          
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
  },
 
  logoContainer: {
    position: 'relative',
    width: 360,
    height: 180,
    marginBottom: 10, 
  },
  image: {
    width: '100%',
    height: '100%',
  },
  reminder: {
    position: 'absolute',
    top: '12%', 
    left: '42%',
    transform: [{ translateX: -125 }],
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'black', 
  },
 
  selector:{
        buttonColor: "grey",
        selectedColor:"white",
        borderColor:"black",
        textColor:"white",
        fontSize:20,
        marginBottom: 10
   },
 
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    height: 95, 
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

export default HomepageScreen;
