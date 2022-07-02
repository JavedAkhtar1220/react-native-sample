import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONTBOLD, FONTREGULAR } from '../../assets/constants';

const index = ({ label, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={{
                fontFamily: FONTBOLD,
                color: "black",
                fontWeight: '900',
                fontSize: 16,
                letterSpacing: 1
            }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default index;