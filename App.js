import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import IntroScreens from './screens/IntroScreens';
import LoginScreen from './screens/LoginScreen';
import EnterWhatsAppNumberScreen from './screens/EnterWhatsAppNumberScreen';
import VerifyOTPScreen from './screens/VerifyOTPScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import MasjidlistScreen from './screens/MasjidlistScreen';
import MasjidDetailScreen from './screens/MasjidDetailScreen';
import DonationListScreen from './screens/DonationListScreen';
import DonationDetailScreen from './screens/DonationDetailScreen';
import PaymentScreen from './screens/PaymentScreen';
import MessageScreen from './screens/MessageScreen';
import NotificationScreen from './screens/NotificationScreen';
import HomepageScreen from './screens/HomepageScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Intro" component={IntroScreens} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EnterWhatsAppNumber" component={EnterWhatsAppNumberScreen} options={{ title: 'Enter Details' }} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} options={{ title: 'Verify OTP' }} />
        <Stack.Screen name="Registration" component={RegistrationScreen} options={{ title: 'Registration' }} />
        <Stack.Screen name="MasjidlistScreen" component={MasjidlistScreen} options={{ title: 'Masjid Lists' }} />
        <Stack.Screen name="MasjidDetails" component={MasjidDetailScreen} options={{ title: 'Masjid Details' }} />
        <Stack.Screen name="DonationLists" component={DonationListScreen} options={{ title: 'Donation Lists' }} />
        <Stack.Screen name="DonationDetails" component={DonationDetailScreen} options={{ title: 'Donation Details' }} />
        <Stack.Screen name="Payments" component={PaymentScreen} options={{ title: 'Payment Details' }} />
        <Stack.Screen name="Messages" component={MessageScreen} options={{ title: ' Thankyou Message ' }} />
        <Stack.Screen name="Notifications" component={NotificationScreen} options={{ title: 'Masjid Notifications' }} />
        <Stack.Screen name="Homepage" component={HomepageScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
