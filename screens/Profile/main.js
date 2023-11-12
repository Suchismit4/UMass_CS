import React, { useRef, useState, useEffect, useCallback } from "react";
import {Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image, FlatList} from 'react-native'
import styles from './style'
import { SafeAreaView } from "react-native-safe-area-context";

function Profile({navigation}){

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
          {marginRight: 30}
        ]}
      ></View>
    );
  };

  const onPressShow = () => {
    // Do something about forgot password operation
    };

    return (
        <View onLayout={onLayoutRootView} style={styles.container}>
        <SafeAreaView>
            <ScrollView>
            <View style={styles.profInfoContainer}>
                <View style={styles.profileContainer}>
                    <Image source={{uri: "https://i.imgur.com/8BHzA5x.png"}} style={styles.profileImg}/>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={{fontSize: 15}}>Stella Dey</Text>
                  <Text style={{fontSize: 10, fontStyle: 'italic'}}>stelladey24@gmail.com</Text>
                </View>
              </View>
              <View style={styles.bio}>
                  <Text style={styles.headText}>About Me</Text>
                  <Text>I am a student at Umass. I am very dumb. I will push you off a cliff. FUCK OFF!!!</Text>
                </View>
                <View style={styles.bio}>
                <Text style={styles.headText}>Skills</Text>
                <FlatList
                horizontal={true}
                data={['react', 'jss', 'html']}
                renderItem={({item, index}) => {
                    return(
                        <Text style={{paddingLeft: index==0?0: 10}}>{item}</Text>
                    )
                }}
                keyExtractor={(item) => item}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                />
                </View>
                <View style={[styles.widgetContainer, { marginTop: 30 }]}>
            {/* Section 1 */}
          </View>
          <View style={styles.slidingContainer}>
            <View style={styles.bio}>
              <Text style={[styles.sectionHeader, {paddingBottom: 20}]}>
                Current Projects...
              </Text>
            </View>
            <TouchableOpacity onPress={onPressShow}><Text style={{fontSize: 40, paddingRight: 30}}>+</Text></TouchableOpacity>
          </View>
          
          <FlatList
            horizontal={true}
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.bio}>
              <Text style={[styles.sectionHeader, {paddingBottom: 20}]}>
                Past Projects...
              </Text>
            </View>
          <FlatList
            horizontal={true}
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
          
          
            </ScrollView>
        </SafeAreaView>
        </View>
    )
}

export default Profile