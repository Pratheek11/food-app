import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const HeaderBar = ({mode, setMode}) => {
  return (
    <View
      style={{flexDirection: 'row', alignSelf: 'center', marginVertical: 5}}>
      <ButtonComp title={'Delivery'} activeTab={mode} setMode={setMode} />
      <ButtonComp title={'Pickup'} activeTab={mode} setMode={setMode} />
    </View>
  );
};

const ButtonComp = props => {
  return (
    <TouchableOpacity
      onPress={() => props.setMode(props.title)}
      style={{
        backgroundColor: props.activeTab === props.title ? '#eee' : 'black',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}>
      <Text
        style={{
          color: props.activeTab === props.title ? 'black' : 'white',
          fontWeight: '700',
          fontSize: 16,
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderBar;
