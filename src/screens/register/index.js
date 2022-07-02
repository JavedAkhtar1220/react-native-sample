import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTREGULAR, FONTBOLD } from '../../assets/constants';

import { Button, Input, Layout, Link } from '../../components';
import { signupUser } from '../../store/actions';
import Toast from 'react-native-toast-message';
import { validateEmail } from '../../utils/ValidateEmail';

const Register = ({ navigation }) => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        address: "",
        email: "",
        password: ""
    })

    const { loading } = useSelector(state => state.authReducers)
    const dispatch = useDispatch();

    const handleChange = (e, name) => {
        setValues(pre => {
            return {
                ...pre,
                [name]: e
            }
        })
    }

    const gotoRegister = () => {
        navigation.navigate("Login");
    }

    const onSignup = () => {
        const isValid = validateEmail(values.email);


        if (!isValid) {
            Toast.show({
                type: 'error',
                text1: 'Email Address is invalid',
            });
        }
        else {
            dispatch(signupUser(values, navigation));
        }





    }

    return (
        <Layout>
            <View style={styles.container}>

                <View style={styles.body}>
                    <Text style={styles.heading}>Let’s Get Started</Text>
                    <Text style={styles.para}>Create an new account</Text>

                    <View style={{ marginTop: 40 }}>

                        <Input
                            placeholder="First Name"
                            icon="user"
                            value={values.firstName}
                            setValue={(e) => handleChange(e, 'firstName')}
                        />

                        <Input
                            placeholder="Last Name"
                            icon="user"
                            value={values.lastName}
                            setValue={(e) => handleChange(e, 'lastName')}
                        />

                        <Input
                            placeholder="Contact Number"
                            icon="phone"
                            value={values.contact}
                            setValue={(e) => handleChange(e, 'contact')}
                        />

                        <Input
                            placeholder="Address"
                            icon="location-pin"
                            value={values.address}
                            setValue={(e) => handleChange(e, 'address')}
                        />

                        <Input
                            placeholder="Enter your email"
                            icon="mail"
                            value={values.email}
                            setValue={(e) => handleChange(e, 'email')}
                        />

                        <Input
                            placeholder="Enter your password"
                            icon="lock"
                            value={values.password}
                            setValue={(e) => handleChange(e, 'password')}
                        />

                        <Button
                            label={'Register'}
                            disable={!values.firstName || !values.lastName || !values.contact || !values.address || !values.email || !values.password}
                            onPress={onSignup}
                            loading={loading}
                        />

                        <View style={{ alignItems: 'center', marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontFamily: FONTREGULAR, marginRight: 4 }}>Already have a account?</Text>
                            <Link label="Login" onPress={gotoRegister} />
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
        fontSize: 15,
        textAlign: 'center',
        fontFamily: FONTREGULAR,
        color: COLORS.lightWhite,
        marginTop: 4
    }
})



export default Register;