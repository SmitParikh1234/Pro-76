import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StarMap from './Screens/StarMap';
import SpaceCrafts from './Screens/SpaceCrafts';
import DailyPics from './Screens/DailyPic';
import { StyleSheet, Text, View } from 'react-native';
import { StackActions } from 'react-navigation';

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{
        headerShown:false
      }}>

        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "SpaceCrafts" component = {SpaceCraftsScreen}/>
        <Stack.Screen name = "DailyPic" component = {DailyPicScreen}/>
        <Stack.Screen name = "StarMap" component = {StarMapScreen}/>

      </Stack.Navigator>

     </NavigationContainer>
  );
}


