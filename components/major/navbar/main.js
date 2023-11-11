import React,  { useState, useEffect, useCallback} from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style.js'

export default function Navbar() {    

    return ( 
        <View style={styles.navbar}>
            <Image
                style={styles.logo}
                source={{uri: 'https://i.imgur.com/5HOplbG.png'}}
            />
            <Image
                style={styles.searchIcon}
                source={{uri: 'https://i.imgur.com/C6shUzE.png'}}
            />
        </View>
    )

}