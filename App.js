import React from 'react';
import { View, StatusBar, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';

import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';
import { Polyline } from 'react-native-maps';
import { Circle } from 'react-native-maps';

import TopBar from './src/components/TopBar/TopBar';
import ActionBar from './src/components/ActionBar/ActionBar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <TopBar />
      <MapView
        style={{ flex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.0001,
        }}
      />
      <ActionBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
