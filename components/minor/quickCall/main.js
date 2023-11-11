import React,  { useState, useEffect, useCallback} from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style.js'

export default function QuickActionBar() {    

    return ( 
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>Get involved in projects.</Text>
                <Text style={styles.subHeader}>there are 56 open positions in various projects.</Text>
            </View>
        </View>
    )

}