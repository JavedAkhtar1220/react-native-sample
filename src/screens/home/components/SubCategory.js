import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FONTBOLD, FONTREGULAR } from '../../../assets/constants';
import { Button, Layout } from '../../../components';
import { getCarTypes } from '../../../store/actions';

import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import imgCar from '../../../assets/images/car.png';

const SubCategory = ({ route, navigation }) => {

    const { id } = route.params;
    const dispatch = useDispatch();
    const { carType, loading } = useSelector(state => state.authReducers);


    useEffect(() => {
        dispatch(getCarTypes(id));
    }, [])

    return (
        <Layout>
            <Text style={styles.heading}>{id} Categories</Text>
            <ScrollView style={{ paddingHorizontal: 20, marginTop: 40 }}>

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

                {carType.length <= 0 &&
                    <Text style={{ fontSize: 18, fontFamily: FONTBOLD, textAlign: 'center', marginTop: 100 }}>
                        Not Record Found
                    </Text>}

                {carType?.map((v, i) => (
                    <View key={i} style={{
                        flexDirection: 'row',
                        height: 200,
                        borderWidth: 2,
                        borderColor: "#ccc",
                        borderRadius: 10,
                        marginBottom: 10
                    }}>
                        <View style={{ flex: 1.4, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={imgCar}
                                resizeMode="center"
                                style={{
                                    width: '100%',
                                    aspectRatio: 2
                                }} />
                        </View>
                        <View style={{
                            flex: 2,
                            justifyContent: 'center',
                            paddingLeft: 40
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontFamily: FONTBOLD
                            }}>{v.model}</Text>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: FONTBOLD
                            }}>{v.make}</Text>
                            <Text style={{
                                fontSize: 16,
                                fontFamily: FONTBOLD,
                                fontStyle: 'italic'
                            }}>{v.year}</Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                                <Button
                                    label={'book Now'}
                                    onPress={() => navigation.navigate("Payment")}
                                />
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
})


export default SubCategory