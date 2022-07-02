import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'
import { Layout, Heading, Input, Button } from '../../components';
import Toast from 'react-native-toast-message';

const Payment = ({ navigation }) => {

    const [values, setValues] = useState({
        cardNo: '',
        holderName: '',
        cvv: ''
    })

    const handleChange = (e, name) => {

        setValues(pre => {
            return {
                ...pre,
                [name]: e
            }
        })
    }

    const congradulation = () => {

        Toast.show({
            type: 'success',
            text1: "Successfully Purchased"
        });

        navigation.navigate("MainStack")

    }

    return (
        <Layout>
            <Heading heading="Payment" />

            <View style={{ paddingHorizontal: 20, marginTop: 50 }}>

                <Input
                    placeholder={"Credit Card Number"}
                    type="number"
                    value={values.cardNo}
                    setValue={(e) => handleChange(e, 'cardNo')}
                />
                <Input
                    placeholder={"Holder Name"}
                    value={values.holderName}
                    setValue={(e) => handleChange(e, 'holderName')} />
                <Input
                    placeholder={"CVV"}
                    type="number"
                    value={values.cvv}
                    setValue={(e) => handleChange(e, 'cvv')} />

                <Button
                    label="Pay Now"
                    disable={!values.cardNo || !values.holderName || !values.cvv}
                    onPress={() => congradulation()} />
            </View>

        </Layout>
    )
}

export default Payment;