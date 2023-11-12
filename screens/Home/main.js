import React, { useRef, useState, useEffect, useCallback } from "react";
import { FlatList, SafeAreaView, Text, View, ScrollView, ImageBackground, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import * as Font from "expo-font";
import Navbar from "../../components/major/navbar/main";
import QuickActionBar from "../../components/minor/quickCall/main";

export default function Home() {
  

  const renderProjects = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View
          style={[
            styles.widget,
            { marginLeft: index == 0 ? 30 : 0 },
            { marginRight: index == projects.length - 1 ? 30 : 25 },
          ]}
        >
          <ImageBackground resizeMode="cover" style={styles.image}>
            <Text style={styles.textHeader}>{item.name}</Text>
            <Text style={styles.textOneliner}>{item.desc}</Text>
            <View style={styles.creatorContainer}>
              {/* <Image style={styles.iconForMaker} source={{uri: 'https://i.imgur.com/UPgjPaH.png'}} /> */}
              <View>
                <Text style={styles.whoMade}>{item.username}</Text>
                <Text style={styles.whoAll}>and {item.teamSize} others...</Text>

              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
      
    );
  };

  // You can add more projects
  const projects = [{name: "Project #1", username: 'Stella Dey', teamSize: 17, desc: 'A scheduling app for college students.'}] 

  return (
    <View style={styles.container}>
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
            data={projects}
            renderItem={renderProjects}
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
            data={projects}
            renderItem={renderProjects}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
