import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Antdesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchBar = ({place, setPlace}) => {
  const setMyplace = e => {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setPlace(e);
    }, 2000);
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 5,
        backgroundColor: '#eee',
        borderRadius: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#eee',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 2}}>
          <View style={{marginLeft: 10}}>
            <Entypo name="location-pin" size={26} color="black" />
          </View>
          <TextInput
            onChangeText={e => setMyplace(e)}
            placeholder="Search"
            placeholderTextColor={'black'}
            style={{maxWidth: '75%', color: 'black', fontWeight: '400'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 30,
          }}>
          <Antdesign
            name="clockcircle"
            size={11}
            color="black"
            style={{marginRight: 6}}
          />
          <Text style={{fontWeight: '500', color: 'black'}}>Search</Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          borderRadius: 30,
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}>
        {/* <Text>This it the recommender</Text>
        <Text>This it the recommender</Text>
        <Text>This it the recommender</Text>
        <Text>This it the recommender</Text> */}
      </View>
    </View>
  );
};

export default SearchBar;
