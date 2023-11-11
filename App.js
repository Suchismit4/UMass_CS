import { StatusBar } from "expo-status-bar";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { FlatList, SafeAreaView, Text, View, ScrollView } from "react-native";
import { Dimensions } from "react-native";
import styles from "./style";
import * as Font from "expo-font";
import Navbar from "./components/major/navbar/main";
import QuickActionBar from "./components/minor/quickCall/main";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);

  //
  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          ClashDisplay: require("./assets/fonts/ClashDisplay.ttf"),
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
      await console.log("Loaded font..");
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) {
    return null;
  }

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          styles.widget,
          { marginLeft: index == 0 ? 30 : 0 },
          { marginRight: index == data.length - 1 ? 30 : 25 },
        ]}
      ></View>
    );
  };

  const data = [1, 2, 3, 4, 5, 6, 7];

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <SafeAreaView>
        <Navbar />
        <ScrollView>
          <View style={[styles.widgetContainer, { marginTop: 30 }]}>
            {/* Section 1 */}
            <View>
              <Text style={styles.sectionHeader}>
                Students are working on...
              </Text>
              <Text style={styles.sectionSubText}>
                View what others are involved in.
              </Text>
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <View style={[styles.widgetContainer, { marginTop: 30 }]}>
            <QuickActionBar />
            {/* Section 1 */}
            <View style={{ marginTop: 35 }}>
              <Text style={styles.sectionHeader}>Find research projects</Text>
              <Text style={styles.sectionSubText}>
                View what professors are working on.
              </Text>
            </View>
          </View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
