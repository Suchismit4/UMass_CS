import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect, useCallback,  } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native'
import styles from './style';
import * as Font from 'expo-font';
import Navbar from './components/major/navbar/main';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);
  
    // EDIT HERE
    useEffect(() => {
      (async () => {
        try {
          await Font.loadAsync({
            'ClashDisplay': require('./assets/fonts/ClashDisplay.ttf'),
          });
          setFontLoaded(true);
        } catch (error) {
          setFontError(true);
          console.error("Error loading font", error);
        }
      })();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (fontLoaded || fontError) {
        await console.log("Loaded font..")
      }
    }, [fontLoaded, fontError]);
  
    if (!fontLoaded && !fontError) {
      return null;
    }


    const renderItem = ({item, index}) => {
      return (
        <View style={{backgroundColor: "#000", width: 100, height: 50, marginRight: 30}}></View>
      )
    }

    const data = [1, 2, 3, 4, 5, 6, 7]

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <SafeAreaView>

          <Navbar /> 

          <View style={styles.widgetContainer}>

            {/* Section 1 */}
            <View>
              <Text style={styles.sectionHeader}>Students are working on...</Text>
              <Text style={styles.sectionSubText}>View what others are involved in.</Text>


            </View>


          </View>
          <FlatList 
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor= {item => item}
                decelerationRate={'slow'}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}

              />

      </SafeAreaView>
    </View>
  );
}
