import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Home} from '../containers/Home';
import {DetailMovie} from '../containers/DetailMovie';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailMovie" component={DetailMovie} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
