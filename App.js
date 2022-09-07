/**
  c1 - matte black - #1C1C1C
  c2 - black light - #171717
  c3 - grey light - #eee
  c4 - red light - rgba()
 */

import React from 'react';
import {View} from 'react-native';
import Navigation from './Navigation';
import {Provider} from 'react-redux';
import configureStore from './redux/store';

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: '#1C1C1C'}}>
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;
