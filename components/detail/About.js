import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';

const About = props => {
  return (
    <Header
      title={props.title}
      description={props.description}
      image={props.image}
      navigation={props.navigation}
      category={props.category}
      location={props.location}
      ratings={props.ratings}
    />
  );
};

const Header = props => {
  let desc = `${props.category.join('~')} ~ ${props.description} ~ ${
    props.ratings
  } ~ ${props.location}  `;

  return (
    <View style={{backgroundColor: 'black'}}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')}
        style={{
          position: 'absolute',
          top: 10,
          left: 15,
          zIndex: 2,
          padding: 5,
        }}>
        <Octicons name="chevron-left" color={'white'} size={26} />
      </TouchableOpacity>
      <Image
        source={props.image}
        style={{width: '100%', height: 180, opacity: 0.8}}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          letterSpacing: 1,
          marginVertical: 5,
          marginHorizontal: 10,
          color: 'white',
        }}>
        {props.title}
      </Text>
      <Text
        style={{
          letterSpacing: 1,
          marginHorizontal: 10,
          marginBottom: 5,
          color: 'white',
        }}>
        {desc}
      </Text>
    </View>
  );
};

export default About;
