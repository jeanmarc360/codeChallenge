import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
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
            // tslint:disable-next-line: no-floating-promises
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
      {!connection && (
        <View style={styles.view_connexion}>
          <Text style={styles.text}>Pas d'internet</Text>
        </View>
      )}
      <AppNavigation />
    </NavigationContainer>
  );
};

export default RootContainer;

const styles = StyleSheet.create({
  view_connexion: {
    backgroundColor: 'red',
    width: '100%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: 'white', fontSize: 15},
});
