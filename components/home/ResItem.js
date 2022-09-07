import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ResItem = ({data, navigation}) => {
  let isEmpty = data.length > 0;

  return (
    <>
      {isEmpty ? (
        data.map((item, index) => (
          <RestaurantMenu key={index} data={item} navigation={navigation} />
        ))
      ) : (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50,
          }}>
          <Image
            source={require('../../assets/icons/sad.png')}
            style={{width: 100, height: 100, resizeMode: 'contain'}}
          />
          <Text
            style={{
              color: '#eee',
              margin: 5,
              fontWeight: 'bold',
              fontSize: 18,
              letterSpacing: 1,
            }}>
            Sorry no items found!
          </Text>
        </View>
      )}
    </>
  );
};

const RestaurantMenu = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', data)}
      activeOpacity={0.9}>
      <View
        style={{
          marginVertical: 5,
          backgroundColor: 'black',
          width: '95%',
          alignSelf: 'center',
          borderRadius: 7,
          padding: 5,
        }}>
        <Image
          source={data.image}
          style={{
            width: '100%',
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center',
            borderRadius: 7,
            opacity: 0.7,
          }}
        />
        <TouchableOpacity style={{position: 'absolute', top: 10, right: 20}}>
          <MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            width: '95%',
            alignSelf: 'center',
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
              {data.name}
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
            {data.ratings}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResItem;
