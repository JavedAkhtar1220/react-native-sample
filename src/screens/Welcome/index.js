import React from 'react';
import { Text, ImageBackground, StyleSheet, StatusBar, View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { Button } from '../../components';

const Welcome = ({ navigation }) => {

    const { loading } = useSelector(state => state.authReducers);

    return (
        <>
            <StatusBar barStyle="light-content" />

            {loading ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator color="black" />
                    <Text>Loading...</Text>
                </View> :
                <ImageBackground
                    source={require('../../assets/images/welcome.png')}
                    resizeMode="stretch"
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                    }}
                >

                    <View style={styles.body}>
                        <Text style={{
                            color: 'white',
                            fontSize: 40,
                            fontFamily: "Poppins-Regular"
                        }}>Find a Perfect Car For You</Text>
                        <View style={{ marginTop: 30 }}>
                            <Button label="Already have an account, Sign in" bg="white" onPress={() => navigation.navigate('Login')} />
                            <Button label="Don’t have account? Signup" bg="white" onPress={() => navigation.navigate('Register')} />
                        </View>
                    </View>

                </ImageBackground >
            }
        </>
    )
}


const styles = StyleSheet.create({
    body: {
        width: "90%",
        marginBottom: 50,
        alignSelf: 'center',
    }
})

export default Welcome;