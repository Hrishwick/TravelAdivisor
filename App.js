import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import AttractionDetails from './src/screen/AttractionDetails';
import Gallery from './src/screen/Gallery';
import Map from './src/screen/Map';

const Stack = createStackNavigator();
const App = () =>{
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name ='Home' component ={Home}/>
     <Stack.Screen name = 'AttractionDetails' component={AttractionDetails}/>
     <Stack.Screen name = 'Gallery' component={ Gallery}/>
     <Stack.Screen name = 'Map' component={ Map }/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;