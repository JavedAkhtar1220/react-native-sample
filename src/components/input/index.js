import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../assets/constants';

import EntypoIcon from 'react-native-vector-icons/Entypo';

const index = ({ placeholder, icon, type, value, setValue, multiline }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const styles = StyleSheet.create({
        input: {
            borderWidth: 2,
            borderColor: isFocused ? "black" : COLORS.inputBorder,
            padding: 14,
            borderRadius: 10,
            paddingHorizontal: 40,
            height: multiline ? 100 : 'auto'
        },
        icon: {
            position: 'absolute',
            top: 15,
            fontSize: 20,
            left: 10,
            color: isFocused ? 'black' : COLORS.lightWhite
        },
        btnShowPassword: {
            position: 'absolute',
            top: 15,
            right: 10,
        },
        iconPassword: {
            fontSize: 20,
            color: isFocused ? 'black' : COLORS.lightWhite
        }
    })

    return (
        <View style={{ marginBottom: 10 }}>
            <EntypoIcon name={icon} style={styles.icon} />
            <TextInput
                placeholder={placeholder}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                style={styles.input}
                keyboardType={icon === "phone" || type === "number" ? "number-pad" : icon === "mail" ? "email-address" : "default"}
                autoCapitalize="none"
                value={value}
                secureTextEntry={icon === "lock" && !showPassword ? true : false}
                autoCorrect={false}
                onChangeText={setValue}
                multiline={multiline}
            />
            {icon === "lock" ? <TouchableOpacity style={styles.btnShowPassword} activeOpacity={0.5} onPress={() => setShowPassword(!showPassword)}>
                <EntypoIcon name={!showPassword ? "eye" : "eye-with-line"} style={styles.iconPassword} />
            </TouchableOpacity> : null}

        </View>
    )
}

export default index;