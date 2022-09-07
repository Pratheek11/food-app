import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View
        style={{
          marginVertical: 5,
          backgroundColor: 'black',
          width: '95%',
          alignSelf: 'center',
          borderRadius: 7,
          padding: 5,
        }}>
        <RestaurantImage />
        <RestaurantTitle />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://media.timeout.com/images/105802468/750/422/image.jpg',
        }}
        style={{
          width: '95%',
          resizeMode: 'contain',
          height: 150,
          alignSelf: 'center',
          borderRadius: 7,
        }}
      />
      <TouchableOpacity style={{position: 'absolute', top: 10, right: 20}}>
        <MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantTitle = () => {
  return (
    <View
      style={{
        margin: 10,
        // padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={{
            color: '#eee',
            fontSize: 16,
            letterSpacing: 1,
            flexWrap: 'wrap',
            maxWidth: '100%',
            fontWeight: 'bold',
          }}>
          The chinees cuisine
        </Text>
        <Text style={{color: '#eee', opacity: 0.65}}>30-45 min </Text>
      </View>
      <Text
        style={{
          color: 'black',
          alignContent: 'center',
          backgroundColor: '#eee',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 50,
          fontWeight: '700',
          fontSize: 16,
        }}>
        4
      </Text>
    </View>
  );
};

export default RestaurantItem;
// https://media.timeout.com/images/105802468/750/422/image.jpg
