import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import DropShadow from "react-native-drop-shadow";
import { COLORS, FONTREGULAR } from '../../../assets/constants';

import imgCar from '../../../assets/images/car.png';

const Card = ({ value, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("SubCategory", {
                    id: value
                })}
            >
                <View style={styles.imgContainer}>
                    <Image source={imgCar} style={{ flex: 1, aspectRatio: 1.3 }} resizeMode="contain" />
                </View>
                <View style={styles.info}>
                    <Text style={styles.catName}>{value}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 220,
        padding: 6,
    },
    card: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 12,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        overflow: 'hidden',
        backgroundColor: "#1b1b1b"
    },
    imgContainer: {
        flex: 2,
    },
    info: {
        flex: 1,
        paddingLeft: 10
    },
    catName: {
        fontSize: 20,
        fontFamily: FONTREGULAR,
        color: "white"
    }
})

export default Card;