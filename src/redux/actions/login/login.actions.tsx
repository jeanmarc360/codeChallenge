import {LOGIN_SUCCESS } from '../../types';
import {
LoginActionTypes,
LoginInterface
} from '../../types';
import {ActionCreator} from 'redux';
import {get} from '../../../services/index';
import {URLS} from '../../../services/url';
import AsyncStorage from '@react-native-async-storage/async-storage';

const postLoginSuccess: ActionCreator<LoginActionTypes> = (
login: LoginInterface,
) => {
return {type: LOGIN_SUCCESS, payload: login};
};

export const postLogin = (email : String= '', password : String ='') =>
    async (dispatch,getState) => {
        await AsyncStorage.setItem('token', 'AAABBBCCCDDDEEEFFFGGGHHH');
        dispatch(postLoginSuccess({
            email : email,
            password : password,
            token : 'AAABBBCCCDDDEEEFFFGGGHHH'
        }))
    };


