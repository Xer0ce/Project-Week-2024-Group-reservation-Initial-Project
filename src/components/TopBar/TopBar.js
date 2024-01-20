import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './TopBar.styles';

import PartagezDonnez from '../../assets/bar/partagezdonnez.png';
import Profil from '../../assets/bar/profil.png';

const TopBar = () => {
    return (
        <View style={styles.topBar}>
            <View style={styles.rowTopBar}>
                <TouchableOpacity activeOpacity={1}>
                    <Image source={PartagezDonnez} style={styles.partagezdonnez} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}>
                    <Image source={Profil} style={styles.profil} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TopBar;