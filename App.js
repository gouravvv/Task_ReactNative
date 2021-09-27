import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AddVideoScreen from './src/screens/AddVideoScreen';
import CameraRollScreen from './src/screens/CameraRollScreen';
import ImageScreen from './src/screens/ImageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="AddVideo"
          component={AddVideoScreen}
          options={{ title: 'Add Video' }}
        />
        <Stack.Screen
          name="CameraRoll"
          component={CameraRollScreen}
          options={{ title: 'Task 1' }}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{ title: 'Image Functionality' }}
        />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
