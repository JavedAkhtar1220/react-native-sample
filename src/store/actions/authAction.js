import { actionType } from "../constants";
import Toast from 'react-native-toast-message';

import axios from 'axios';
import { BASE_URI } from "../../api";

export const getLoggedUser = () => {
    return async (dispatch) => {

        dispatch({
            type: actionType.LOADING
        })

        try {

            const user = await axios.get(`${BASE_URI}user`);

            console.log(user.data);

            if (user.data.data) {

                dispatch({
                    type: actionType.GET_LOGGED_USER_SUCCESS,
                    payload: user.data
                })

            }

            else {
                dispatch({
                    type: actionType.GET_LOGGED_USER_FAIL,
                })
            }

        }
        catch (err) {
            dispatch({
                type: actionType.GET_LOGGED_USER_FAIL,
            })

            Toast.show({
                type: 'error',
                text1: err.message,
            });
        }

    }
}

export const signupUser = (values, navigation) => {
    return async (dispatch) => {

        dispatch({
            type: actionType.LOADING
        })

        try {
            const user = await axios.post(`${BASE_URI}signup`, values);

            if (user.data.error) {

                dispatch({
                    type: actionType.SIGNUP_FAIL,
                })

                Toast.show({
                    type: 'error',
                    text1: user.data.error,
                });


            }
            else {
                dispatch({
                    type: actionType.SIGNUP_SUCCESS,
                })
                Toast.show({
                    type: 'error',
                    text1: user.data.message,
                });

                navigation.navigate('Login')
            }

        }
        catch (err) {
            dispatch({
                type: actionType.SIGNUP_FAIL,
            })

            Toast.show({
                type: 'error',
                text1: err.message,
            });
        }
    }
}

export const loginUser = (values, navigation) => {
    return async (dispatch) => {

        dispatch({
            type: actionType.LOADING
        })

        try {
            const user = await axios.post(`${BASE_URI}login`, values);

            if (user.data.error) {

                dispatch({
                    type: actionType.LOGIN_FAIL,
                })

                Toast.show({
                    type: 'error',
                    text1: user.data.error,
                });

            }
            else {

                Toast.show({
                    type: 'error',
                    text1: user.data.message,
                });

                dispatch({
                    type: actionType.LOGIN_SUCCESS,
                    payload: user.data.data
                })

            }

        }
        catch (err) {
            dispatch({
                type: actionType.LOGIN_FAIL,
            })

            Toast.show({
                type: 'error',
                text1: err.message,
            });
        }

    }
}

export const signoutUser = () => {
    return async (dispatch) => {


        dispatch({
            type: actionType.LOADING
        })

        try {

            const user = await axios.get(`${BASE_URI}signout`);

            dispatch({
                type: actionType.USER_SIGNOUT
            })

        }
        catch (err) {
            Toast.show({
                type: 'error',
                text1: err.message,
            });
        }

    }
}

export const getCars = () => {
    return async (dispatch) => {

        dispatch({
            type: actionType.LOADING
        })

        try {
            const types = await axios.get(`${BASE_URI}cars`);

            dispatch({
                type: actionType.GET_CARS_SUCCESS,
                payload: types.data.data
            })

        }
        catch (err) {
            dispatch({
                type: actionType.GET_CARS_FAIL,
            })
            Toast.show({
                type: 'error',
                text1: err.message,
            });
        }
    }
}

export const getCarTypes = (id) => {
    return async (dispatch) => {

        dispatch({
            type: actionType.LOADING
        })

        try {

            const types = await axios.get(`${BASE_URI}carTypes`);

            const filter = types.data.data.filter(val => val?.type === id);

            dispatch({
                type: actionType.GET_CARS_TYPE_SUCCESS,
                payload: filter
            })

        }
        catch (err) {
            dispatch({
                type: actionType.GET_CARS_TYPE_FAIL,
            })
            Toast.show({
                type: 'error',
                text1: err.message,
            });
        }
    }
}