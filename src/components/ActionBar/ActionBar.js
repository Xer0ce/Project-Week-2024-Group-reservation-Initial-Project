import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import MesRdv from '../../assets/bar/mesrdv.png';
import MesRdvSelected from '../../assets/bar/mesrdv_select.png';
import OuDonner from '../../assets/bar/oudonner.png';
import OuDonnerSelected from '../../assets/bar/oudonner_select.png';
import PuisJeDonner from '../../assets/bar/puisjedonner.png';
import PuisJeDonnerSelected from '../../assets/bar/puisjedonner_select.png';
import Plus from '../../assets/bar/plus.png';

import styles from './ActionBar.styles';

const ActionBar = () => {
    const [isMesRdvPressed, setIsMesRdvPressed] = React.useState(false);
    const [isOuDonnerPressed, setIsOuDonnerPressed] = React.useState(false);
    const [isPuisJeDonnerPressed, setIsPuisJeDonnerPressed] = React.useState(false);
    const [isPlusPressed, setIsPlusPressed] = React.useState(false);

    const handlePressMesRdv = () => {
        if (!isMesRdvPressed) {
            setIsMesRdvPressed(!isMesRdvPressed);
            setIsOuDonnerPressed(false);
            setIsPuisJeDonnerPressed(false);
        }
    }

    const handlePressOuDonner = () => {
        if (!isOuDonnerPressed) {
            setIsOuDonnerPressed(!isOuDonnerPressed);
            setIsMesRdvPressed(false);
            setIsPuisJeDonnerPressed(false);
        }
    }

    const handlePressPuisJeDonner = () => {
        if (!isPuisJeDonnerPressed) {
            setIsPuisJeDonnerPressed(!isPuisJeDonnerPressed);
            setIsOuDonnerPressed(false);
            setIsMesRdvPressed(false);
        }
    }

    const handlePressPlus = () => {
        if (!isPlusPressed) {
            setIsOuDonnerPressed(false);
            setIsMesRdvPressed(false);
            setIsPuisJeDonnerPressed(false);
        }
    }

    return (
        <View style={styles.actionBar}>
            <View style={styles.line} />
            <View style={styles.row}>
                <TouchableOpacity onPress={handlePressOuDonner} activeOpacity={1}>
                    <Image source={isOuDonnerPressed ? OuDonnerSelected : OuDonner} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressPuisJeDonner} activeOpacity={1}>
                    <Image source={isPuisJeDonnerPressed ? PuisJeDonnerSelected : PuisJeDonner} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressMesRdv} activeOpacity={1}>
                    <Image source={isMesRdvPressed ? MesRdvSelected : MesRdv} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePressPlus} activeOpacity={1}>
                    <Image source={Plus} style={styles.image} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default ActionBar;