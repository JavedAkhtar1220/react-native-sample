import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTBOLD, FONTREGULAR } from '../../assets/constants';
import { Button, Layout } from '../../components';

import FeatherIcon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { signoutUser } from '../../store/actions';

const Settings = ({ navigation }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(signoutUser());
    }

    return (
        <Layout>
            <Text style={styles.heading}>Settings</Text>

            <View style={styles.logout}>
                <Button label={"Logout"} onPress={onLogout} />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        marginTop: 20,
        textAlign: 'center',
        fontFamily: FONTBOLD
    },
    logout: {
        width: '90%',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    link: {
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        fontSize: 24,
        marginRight: 20
    },
    label: {
        fontSize: 18,
        fontFamily: FONTREGULAR,
    }
})


export default Settings;