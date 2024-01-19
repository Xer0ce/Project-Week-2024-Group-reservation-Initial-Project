import React from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';
import MesRdv from './assets/bar/mesrdv.png';
import OuDonner from './assets/bar/oudonner.png';
import PuisJeDonner from './assets/bar/puisjedonner.png';
import Plus from './assets/bar/plus.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.actionBar}>
          <View style={styles.line} />
          <View style={styles.row}>
            <Image source={OuDonner} style={styles.oudonner} />
            <Image source={PuisJeDonner} style={styles.puisjedonner} />
            <Image source={MesRdv} style={styles.mesrdv} />
            <Image source={Plus} style={styles.plus} />
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "column",
    height: "12%",
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "190%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#696969',
  },
  mesrdv: {
    height: 75,
    width: 75,
    marginTop: -4,
    resizeMode: 'contain',
  },
  oudonner: {
    height: 75,
    width: 75,
    marginTop: -8,
    resizeMode: 'contain',
  },
  puisjedonner: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  plus: {
    height: 75,
    width: 75,
    marginTop: -8,
    resizeMode: 'contain',
  },
  row: {
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});
