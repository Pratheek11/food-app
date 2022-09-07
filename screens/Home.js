import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import HeaderBar from '../components/home/HeaderBar';
import ResItem from '../components/home/ResItem';
import SearchBar from '../components/home/SearchBar';
import data from '../data/restaurants.json';

const Home = ({navigation}) => {
  const [place, setPlace] = useState('Bangalore');
  const [category, setCategory] = useState('All');
  const [mode, setMode] = useState('Delivery');
  const [items, setItems] = useState(data);
  const [active, setActive] = useState('Home');

  const getData = () => {
    let items;
    items = data.filter(el => {
      // alert(el.location.search(place), place);
      if (el.location.search(place) === 0 || el.location.search(place) !== -1)
        return el;
    });
    items = items.filter(el => {
      if (category === 'All' || el.category.indexOf(category) !== -1) {
        return el;
      }
    });
    items = items.filter(el => {
      if (el.modes.indexOf(mode) !== -1) {
        return el;
      }
    });
    setItems(items);
  };

  useEffect(() => {
    getData();
  }, [place, category, mode]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1C1C1C'}}>
      <StatusBar barStyle={'light'} backgroundColor={'#1C1C1C'} />
      <View style={{backgroundColor: '#171717', padding: 10}}>
        <HeaderBar mode={mode} setMode={setMode} />
        <SearchBar place={place} setPlace={setPlace} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories category={category} setCategory={setCategory} />
        <ResItem data={items} navigation={navigation} />
      </ScrollView>
      {/* <Divider width={1} /> */}
      <BottomTabs active={active} setActive={setActive} />
    </SafeAreaView>
  );
};

export default Home;
