import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from './types';
import { Platform, View, Image, Text, StatusBar } from 'react-native';
import Home from './App/Home';
import Menu from './App/Menu';
import Cart from './App/Cart';
import Account from './App/Account';
import { Entypo, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic, useFonts
} from '@expo-google-fonts/poppins';
import ProductDetails from './components/ProductDetails';

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();

function AppStack() {
  // Font loading
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  // Check if fonts are loaded
  if (!fontsLoaded) {
    // Return a loading indicator while fonts are loading
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./assets/adaptive-icon.png')} style={{ width: 200, height: 200 }} />
        <Text>Loading...</Text>
      </View>
    );
  }


  return (
    <Stack.Navigator initialRouteName="HomeDs" screenOptions={{
      headerShown: false,
      headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Poppins_400Regular', },
    }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#DB3C25",
        tabBarInactiveTintColor: "#858585",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingTop: 10,
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ? 10 : 20,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={29} />,
        })}
      />
      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={() => ({
          title: 'Menu',
          tabBarIcon: ({ color, size }) => <AntDesign name="appstore1" color={color} size={size} />
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={() => ({
          title: 'Cart',
          tabBarIcon: ({ color, size }) => <Ionicons name="bag-handle" color={color} size={30} />,
        })}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={() => ({
          title: 'Account',
          tabBarIcon: ({ color, size }) => <Image source={require('./assets/img/tabicon.png')} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <AppStack />
    </NavigationContainer>
  );
}
