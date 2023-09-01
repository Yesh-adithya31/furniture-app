import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

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
    <View style={styles.container}>
      <Text style={styles.textStyles}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
