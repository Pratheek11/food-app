import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInputComponent,
} from 'react-native';
import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

const MenuItems = ({data, name}) => {
  const dispatch = useDispatch();

  const selectItems = ({item, restaurantName, checkboxValue}) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: {...item},
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#1C1C1C'}}>
      {data.map((el, index) => {
        return (
          <View
            key={index}
            style={{
              paddingVertical: 4,
              backgroundColor: 'black',
            }}>
            <Item
              selectItems={selectItems}
              name={name}
              title={el.title}
              description={el.description}
              price={el.price}
              image={el.image}
            />
            <View
              style={{
                backgroundColor: '#eee',
                padding: 0.5,
                opacity: 0.5,
                width: '90%',
                alignSelf: 'center',
                borderRadius: 30,
              }}></View>
          </View>
        );
      })}
      <Text
        style={{
          color: 'white',
          alignSelf: 'center',
          textTransform: 'uppercase',
          letterSpacing: 2,
          marginVertical: 40,
        }}>
        Eats😋
      </Text>
    </ScrollView>
  );
};

const Item = ({selectItems, ...props}) => {
  const items = useSelector(state => state.cartReducer.selectedItems.items);
  const isFoodSelected = (items, el) => {
    return Boolean(items.find(ele => ele.title === el.title));
  };

  return (
    <View
      style={{
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        height: 'auto',
      }}>
      <BouncyCheckbox
        onPress={checkboxValue => {
          selectItems({
            item: {title: props.title, price: props.price},
            restaurantName: props.name,
            checkboxValue: checkboxValue,
          });
        }}
        isChecked={isFoodSelected(items, props)}
        iconStyle={{borderColor: 'black'}}
        fillColor="green"
      />
      <Content
        title={props.title}
        description={props.description}
        price={props.price}
      />
      <ImageCont image={props.image} />
    </View>
  );
};

const Content = props => {
  return (
    <View style={{width: '60%', flexDirection: 'column'}}>
      <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
        {props.title}
      </Text>
      <Text style={{color: 'white', marginVertical: 5}}>
        {props.description}
      </Text>
      <Text style={{fontSize: 12, color: 'white'}}>{props.price}</Text>
    </View>
  );
};

const ImageCont = props => {
  return (
    <View style={{elevation: 3}}>
      <Image
        source={{uri: props.image}}
        style={{width: 100, height: 100, resizeMode: 'cover', borderRadius: 10}}
      />
    </View>
  );
};

export default MenuItems;
