import { actionType } from "../constants";

const INITIAL_STATE = {
    loading: false,
    user: {},
    cars: [],
    carType: []
}

const authReducers = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionType.LOADING:
            return {
                ...state,
                loading: true
            };
        case actionType.GET_LOGGED_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            };
        case actionType.GET_LOGGED_USER_FAIL:
            return {
                ...state,
                loading: false,
            };
        case actionType.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case actionType.SIGNUP_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: payload
            };
        case actionType.LOGIN_FAIL:
            return {
                ...state,
                loading: false
            };
        case actionType.USER_SIGNOUT:
            return {
                ...state,
                loading: false,
                user: {}
            };
        case actionType.GET_CARS_SUCCESS:
            return {
                ...state,
                loading: false,
                cars: payload
            };
        case actionType.GET_CARS_FAIL:
            return {
                ...state,
                loading: false,
                cars: []
            };
        case actionType.GET_CARS_TYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                carType: payload
            };
        case actionType.GET_CARS_TYPE_FAIL:
            return {
                ...state,
                loading: false,
                carType: []
            };
        default: return state
    }
}

export default authReducers;