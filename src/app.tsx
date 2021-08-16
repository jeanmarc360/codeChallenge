import React, {useEffect} from 'react';
import RootContainer from './containers/RootContainers';
import {Provider} from 'react-redux';
import {store} from './redux';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
