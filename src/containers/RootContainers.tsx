import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AppNavigation from '../navigation/AppNavigation';

const RootContainer = () => {
  const [connection, setConnection] = useState<boolean>(true);
  useEffect(() => {
    NetInfo.fetch().then(state => {
      setConnection(state.isInternetReachable);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setConnection(state.isInternetReachable);
    });

    return () => unsubscribe();
  }, []);

  if (connection === false) {
    Alert.alert(
      'No internet connection',
      'The app need internet connection to run correctly.',
      [
        {
          text: 'Try again',
          onPress: () => {
            console.log('--Manual');
            NetInfo.fetch().then(state => {
              setConnection(state.isInternetReachable);
            });
          },
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default RootContainer;

