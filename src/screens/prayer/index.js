import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import Fonts from '../../styles/Fonts';
import {colors} from '../../styles/colors';

const PrayerScreen = ({navigation}) => {
  const {container, innerContainer, titleContainer, titleText} = styles;
  const data = [
    {title: 'BERGEN', id: 1, header: 'Dua Fajr', data: 'Fajr'},
    {title: 'KRISTIANSAND', id: 2, header: 'Dua Dhur', data: 'Dhur'},
    {title: 'OSLO', id: 3, header: 'Dua Asr', data: 'Asr'},
    {title: 'STAVANGER', id: 4, header: 'Dua Maghrib', data: 'Maghrib'},
    {title: 'TRONDHEIM', id: 5, header: 'Dua Isha', data: 'Isha'},
  ];
  const {RalewaySemiBold, RalewayBold} = Fonts;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('PrayerDetailScreen')}
        style={titleContainer}
        activeOpacity={0.7}>
        <Text style={[titleText, RalewayBold]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={container}>
      <Header title={'Prayer'} navigation={navigation} />
      <View style={innerContainer}>
        <FlatList
          data={data}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 30,
            paddingTop: 30,
          }}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orangeMedium,
  },
  innerContainer: {
    backgroundColor: colors.orangeExtraLight,
    flex: 1,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
  },
  titleContainer: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 30,
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 25,
    elevation: 4,
  },
  titleText: {
    fontSize: 17,
    color: colors.orangeMedium,
  },
});

export default PrayerScreen;
