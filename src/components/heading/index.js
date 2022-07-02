import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { FONTBOLD, FONTREGULAR, COLORS } from '../../assets/constants';

const index = ({ heading, subHead }) => {
    return (
        <View>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.para}>{subHead}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: FONTBOLD
    },
    para: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: FONTREGULAR,
        color: COLORS.lightWhite,
        marginTop: 4
    }
})


export default index