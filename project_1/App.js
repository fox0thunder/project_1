import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Home from './src/pages/Home';
import HomeV1 from './src/pages/home_version/HomeV1';
import HomeV2 from './src/pages/home_version/HomeV2';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Prompt': require('./assets/fonts/Prompt/Prompt-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeV1" component={HomeV1} />
        <Stack.Screen name="HomeV2" component={HomeV2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}