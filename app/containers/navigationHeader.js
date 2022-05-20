import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import PhotosGrid from '../screen/photosGrid';

const Tab = createMaterialTopTabNavigator();

export default function NavigationHeader() {
    return (
        <Tab.Navigator style={styles.container}>
            {/* <Tab.Screen name="Camera"   children={()=><PhotosGrid type="all"/>} /> */}
            <Tab.Screen name="Camera" children={()=><PhotosGrid type="Camera"/>} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    }
})