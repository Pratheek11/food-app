import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

const BottomTabs = ({active, setActive}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        // margin: 5,
        paddingVertical: 5,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: 'black',
      }}>
      <IconSec title="Home" name="home" active={active} setActive={setActive} />
      <IconSec
        title="Browse"
        name="search"
        active={active}
        setActive={setActive}
      />
      <IconSec
        title="Grocery"
        name="browser"
        active={active}
        setActive={setActive}
      />
      <IconSec
        title="Orders"
        name="history"
        active={active}
        setActive={setActive}
      />
      <IconSec
        title="Account"
        name="person"
        active={active}
        setActive={setActive}
      />
    </View>
  );
};

const IconSec = props => {
  return (
    <TouchableOpacity
      onPress={() => props.setActive(props.title)}
      style={{
        alignItems: 'center',
        padding: 5,
        borderRadius: 7,
        backgroundColor: props.active == props.title ? '#eee' : 'black',
      }}>
      <Octicons
        name={props.name}
        size={25}
        color={props.active == props.title ? 'black' : '#eee'}
      />
      <Text
        style={{
          color: props.active == props.title ? 'black' : '#eee',
          fontWeight: '700',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default BottomTabs;
