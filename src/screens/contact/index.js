import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { Button, Heading, Input, Layout } from '../../components';

const Contact = () => {
    return (
        <Layout>
            <View style={{ marginTop: 50 }}>
                <Heading heading="Contact Us" />

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 30 }}>
                    <Input placeholder="Your Message" multiline />
                    <Button label="Submit" />
                </View>

            </View>
        </Layout>
    )
}

export default Contact;