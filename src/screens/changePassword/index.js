import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTREGULAR } from '../../assets/constants';

import { Button, Heading, Input, Layout } from '../../components';

const ChangePassword = () => {
    return (
        <Layout>
            <View style={{ marginTop: 50 }}>
                <Heading heading="Change Password" />
            </View>


            <View style={{ marginTop: 60, width: '90%', alignSelf: 'center' }}>
                <View style={{ marginBottom: 20 }}>
                    <Text style={styles.label}>Enter the current password</Text>
                    <Input placeholder="Current Password" icon="lock" />
                </View>

                <Text style={styles.label}>Enter the new password</Text>
                <Input placeholder="New Password" icon="lock" />
                <Input placeholder="New Password Again" icon="lock" />
                <Button label="Update Password" />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        fontFamily: FONTREGULAR,
        marginBottom: 10
    }
})

export default ChangePassword;