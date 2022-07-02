import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { FONTBOLD } from '../../../assets/constants';

import { Card } from '.';
import { useSelector } from 'react-redux';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const Category = ({ navigation }) => {


    const { loading, cars } = useSelector(state => state.authReducers);

    return (
        <ScrollView style={{ height: '100%' }}>
            <Text style={styles.heading}>Car Categories</Text>
            <View style={{
                width: '90%',
                alignSelf: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 30
            }}>

                {loading && <SkeletonPlaceholder>
                    <View style={{ flexDirection: "row", alignItems: "center", flexWrap: 'wrap' }}>
                        {/* <View style={{ width: 60, height: 60, borderRadius: 50 }} /> */}
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <View style={{ width: 150, height: 200, borderRadius: 4 }} />
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <View style={{ width: 150, height: 200, borderRadius: 4 }} />
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <View style={{ width: 150, height: 200, borderRadius: 4 }} />
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <View style={{ width: 150, height: 200, borderRadius: 4 }} />
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <View style={{ width: 150, height: 200, borderRadius: 4 }} />
                        </View>
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <View style={{ width: 150, height: 200, borderRadius: 4 }} />
                        </View>
                    </View>
                </SkeletonPlaceholder>}
                {cars?.map((v, i) => (
                    <Card value={v} navigation={navigation} key={i} />
                ))}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        marginTop: 20,
        textAlign: 'center',
        fontFamily: FONTBOLD
    },
})

export default Category