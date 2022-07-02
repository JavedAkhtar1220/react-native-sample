import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, FONTBOLD, FONTREGULAR } from '../../assets/constants';

import { Button, Input, Layout, Link } from '../../components';

const ForgotPassword = ({ navigation }) => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e, name) => {

        setValues(pre => {
            return {
                ...pre,
                [name]: e
            }
        })
    }

    const gotoRegister = () => {
        navigation.navigate("Register");
    }


    return (
        <Layout>
            <View style={styles.container}>

                <View style={styles.body}>
                    <Text style={styles.heading}>Forgot Password</Text>
                    <Text style={styles.para}>Enter the email address associated with your account and we'll send you a link to reset your password</Text>

                    <View style={{ marginTop: 40 }}>
                        <Input
                            placeholder="Enter your email"
                            icon="mail"
                            value={values.email}
                            setValue={(e) => handleChange(e, 'email')}
                        />

                        <Button label={'Reset Password'} />

                        <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: FONTREGULAR, marginRight: 4 }}>Don’t have a account?</Text>
                            <Link label="Register" onPress={gotoRegister} />
                        </View>

                    </View>
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
    },
    body: {
        width: "90%",
        alignSelf: 'center'
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: FONTBOLD
    },
    para: {
        fontSize: 12,
        textAlign: 'center',
        fontFamily: FONTREGULAR,
        color: COLORS.lightWhite,
        marginTop: 4
    }
})

export default ForgotPassword;