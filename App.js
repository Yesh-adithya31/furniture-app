import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/OpenSans-Regular.ttf'),
    light: require('./assets/fonts/OpenSans-Light.ttf'),
    bold: require('./assets/fonts/OpenSans-Bold.ttf'),
    medium: require('./assets/fonts/OpenSans-Medium.ttf'),
    extrabold: require('./assets/fonts/OpenSans-ExtraBold.ttf'),
    senibold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bottom Navigation' component={BottomTabNavigation} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles:{
    fontFamily: "extrabold",
    fontSize: 29
  }
});
