import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, FONTREGULAR } from '../../assets/constants';

const index = ({ label, bg, onPress, disable, loading }) => {

    const styles = StyleSheet.create({
        fullWidth: {
            width: '100%',
            padding: 16,
            backgroundColor: bg === "white" ? "white" : bg === "transparent" ? "transparent" : COLORS.primary,
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 10,
            marginBottom: 10,
            opacity: disable ? 0.5 : 1
        },
        label: {
            color: bg === "white" ? "black" : "white",
            fontFamily: FONTREGULAR,
            fontSize: 16,
            textAlign: 'center'
        }
    })


    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.fullWidth}
            onPress={loading ? null : onPress}
            disabled={disable}
        >
            {loading ? <ActivityIndicator color={COLORS.white} /> : <Text style={styles.label}>{label}</Text>}

        </TouchableOpacity>
    )
}


export default index;