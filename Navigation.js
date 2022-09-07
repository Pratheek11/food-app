import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import Home from './screens/Home';
import Details from './screens/Details';
import OrderCompleted from './screens/OrderCompleted';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={{colors: {background: 'black'}}}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
