import {createStackNavigator} from '@react-navigation/stack';
import React, { useState, useContext, useEffect, FC } from 'react';
import {Home} from '../containers/Home';
import {DetailMovie} from '../containers/DetailMovie';
import { Authentification } from '../containers/authentification/Authentification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginInterface } from '../redux/types';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/index';


const Stack = createStackNavigator();

/*export const AuthNavigation: FC = () => {
  return(
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Authentification" component={Authentification} />
    </Stack.Navigator>
  )
}
export const AppNavigation :FC = () => {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="DetailMovie" component={DetailMovie} />
        </>
    </Stack.Navigator>
  );
};*/
const AppNavigation :FC = () => {
  const [token,setToken] =  useState<String|null>(null);

  
  const loginStore: LoginInterface | null = useSelector(
    (state: RootState) => state.LoginReducer.login,
  );
  
  useEffect(()=>{
    console.log(loginStore);
  });
  useEffect(() => {
    AsyncStorage.getItem('token')
      .then((token: any) => { 
        if (token) {
          console.log('AppNavigation Token', token);
          setToken(token);
        }
      })
      .catch((error: any) => {
        console.log('Login error ', error);
      });
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        {
          loginStore == null ? (
            <>
              <Stack.Screen name="Authentification" component={Authentification} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="DetailMovie" component={DetailMovie} />
            </>
          )
        }
    </Stack.Navigator>
  );
};

export default AppNavigation;
