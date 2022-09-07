import {View, StatusBar} from 'react-native';
import React from 'react';
import About from '../components/detail/About';
import MenuItems from '../components/detail/MenuItems';
import ViewCart from '../components/detail/ViewCart';

const Details = ({navigation, route}) => {
  let data = route.params;
  // console.log(data);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" backgroundColor={'black'} />
      <About
        navigation={navigation}
        category={data.category}
        ratings={data.ratings}
        location={data.location}
        image={data.image}
        title={data.name}
        description={data.description}
      />
      <View
        style={{
          backgroundColor: '#eee',
          padding: 0.5,
          opacity: 0.7,
          width: '100%',
          alignSelf: 'center',
          borderRadius: 30,
        }}></View>
      <MenuItems data={data.menu} name={data.name} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default Details;
