import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { FONTBOLD } from '../../assets/constants';

import { Layout } from '../../components';
import { getCars } from '../../store/actions';
import { Category } from './components';
import Card from './components/Card';

const Home = ({ navigation }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCars());
    }, []);

    return (
        <Layout>
            <Category navigation={navigation} />
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

export default Home;