import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const ViewCart = ({navigation}) => {
  const [modelVisisble, setModelVisisble] = useState(false);
  const items = useSelector(state => state.cartReducer.selectedItems.items);
  let total = items
    .map(el => Number(el.price.replace('$', '')))
    .reduce((prev, cur) => prev + cur, 0);
  const {cart, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const handleModel = () => {
    return (
      <View>
        <View>
          <Text>{restaurantName}</Text>
          {cart.map(el => (
            <View>
              <Text>{el.titl}</Text>
              <Text>{el.price}</Text>
            </View>
          ))}
        </View>
        <View>
          <Text>Subtotal</Text>
          <Text>{total}</Text>
        </View>
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            backgroundColor: 'white',
            paddingVertical: 10,
            borderRadius: 30,
            margin: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setModelVisisble(false);
              navigation.navigate('OrderCompleted');
            }}>
            <Text>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modelVisisble}
        transparent={true}
        onRequestClose={() => setModelVisisble(false)}>
        {handleModel()}
      </Modal>
      {total ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setModelVisisble(true)}
          style={{
            width: '80%',
            alignSelf: 'center',
            backgroundColor: 'white',
            paddingVertical: 10,
            borderRadius: 30,
            margin: 10,
            position: 'absolute',
            bottom: 25,
          }}>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              fontWeight: '700',
            }}>
            {`ViewCart \t\t\t\t\t\t $${total}`}
          </Text>
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;
