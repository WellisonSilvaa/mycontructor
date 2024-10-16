import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/screens/Feed';
// import PostList from './src/screens/PostList';
import Navigator from './src/Navigator'

import { PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';
import {
  Barlow_400Regular,
  Barlow_600SemiBold,
  Barlow_600SemiBold_Italic,
  Barlow_700Bold,
  Barlow_700Bold_Italic,
  Barlow_800ExtraBold,
} from '@expo-google-fonts/barlow';
import { useState, useCallback, useEffect } from "react"
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          PermanentMarker_400Regular,
          Barlow_600SemiBold,
          Barlow_700Bold
        });
        console.log('foi')
        await new Promise((resolve) => setTimeout(resolve, 0));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }


  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <Navigator/>
      {/* <Feed/> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
