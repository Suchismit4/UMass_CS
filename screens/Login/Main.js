import React, { useRef, useState, useEffect, useCallback } from "react";
import {Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from "expo-font";

const Login = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [fontError, setFontError] = useState(false);

  //
  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync({
          ClashDisplay: require("../../assets/fonts/ClashDisplay.ttf"),
        });
        setFontLoaded(true);
      } catch (error) {
        setFontError(true);
        console.error("Error loading font", error);
      }
    })();
  }, []);

  const [details, setDetails] = useState({email: '', password: ''})

  const onPressForgotPassword = () => {
    // Do something about forgot password operation
    };

  const onPressLogin = () => {
    // Do something about forgot password operation
      navigation.navigate('Home')
    };
  const onPressSignUp = () => {
    // Do something about forgot password operation
    };

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await console.log("Loaded font..");
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded && !fontError) {
    return null;
  }

  // const [details, setDetails] = useState({email: '', password: ''})

  return (
    <View onLayout = {onLayoutRootView} style={styles.container}>
      
      <View style={styles.loginBox}>
        <View>
          <Text style={{marginBottom: 20, fontSize: 20, color: 'black'}}>Login</Text>
        </View>
        <View style={styles.inputView}>
          <TextInput onChangeText = {(text) => setDetails({email: text})} placeholder="Enter your mail" placeholderTextColor="#003f5c" style={styles.inputText}/>
        </View>
        <View style={styles.inputView}>
          <TextInput onChangeText = {(text) => setDetails({email: text})} placeholder="Your password" placeholderTextColor="#003f5c" style={styles.inputText}/>
        </View>
       
        <TouchableOpacity onPress = {onPressLogin} style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={{color: 'black', fontSize: 11}}>New to our app? </Text>
        <TouchableOpacity onPress = {onPressSignUp}>
            <Text style={styles.forgotAndSignUpText}>Sign up</Text>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default Login