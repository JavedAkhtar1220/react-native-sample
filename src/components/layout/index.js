import React from 'react';
import { SafeAreaView } from 'react-native';

const index = ({ children }) => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            {children}
        </SafeAreaView>
    )
}

export default index;