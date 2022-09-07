import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  findNodeHandle,
} from 'react-native';

const Categories = ({category, setCategory}) => {
  const items = [
    {
      image: require('../../assets/icons/shopping-cart.png'),
      title: 'All',
    },
    {
      image: require('../../assets/icons/burger.png'),
      title: 'Fastfood',
    },
    {
      image: require('../../assets/icons/coffee.png'),
      title: 'Coffee & Tea',
    },
    {
      image: require('../../assets/icons/soft-drink.png'),
      title: 'Cool drinks',
    },
    {
      image: require('../../assets/icons/breads.png'),
      title: 'Bakery',
    },
    {
      image: require('../../assets/icons/piece-of-cake.png'),
      title: 'Desserts',
    },
  ];

  const categorySetter = e => {
    let s = e._dispatchInstances.memoizedProps.children[0][1].props.children;
    setCategory(s);
  };

  return (
    <View style={{backgroundColor: '#171717', marginVertical: 5}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={categorySetter}
            style={{margin: 10, alignItems: 'center'}}>
            <Image
              source={item.image}
              style={{width: 50, height: 40, margin: 2, resizeMode: 'contain'}}
            />
            <Text style={{color: '#eee'}}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text
        style={{
          color: 'black',
          width: '95%',
          alignSelf: 'center',
          backgroundColor: '#eee',
          fontSize: 14,
          fontWeight: 'bold',
          paddingHorizontal: 2,
          borderRadius: 50,
          textAlign: 'center',
        }}>
        {category}
      </Text>
    </View>
  );
};

export default Categories;
