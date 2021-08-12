import React, {useEffect } from 'react';
import { SafeAreaView, StatusBar, } from 'react-native';
import { Home } from './containers/Home';
import { Provider } from 'react-redux';
import { store } from './redux';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {


  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" hidden />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
