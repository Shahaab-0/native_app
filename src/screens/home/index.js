import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';
import {getByDay, getByMonth} from 'prayertiming';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../components/Header';
import Fonts from '../../styles/Fonts';

const HomeScreen = ({navigation}) => {
  const {
    container,
    innerContainer,
    titleContainer,
    titleContainer1,
    titleText,
  } = styles;
  const {RalewaySemiBold, RalewayMedium, RalewayBold} = Fonts;
  const data = [
    {title: 'Oslo', time: 'July 15', id: 1},
    {title: 'Imsak', time: '01:23', id: 2},
    {title: 'Fire', time: '01:53', id: 3},
    {title: 'Sunrise', time: '04:24', id: 5},
    {title: 'Dhur', time: '13:23', id: 4},
    {title: 'Asr', time: '17:57', id: 16},
    {title: 'Sunset', time: '22:23', id: 131},
    {title: 'Maghrib', time: '22:53', id: 121},
    {title: 'Isha', time: '23:30', id: 13},
    {title: 'Midnight', time: '00-07', id: 11},
  ];

  const [prayerData, setPrayerData] = useState('');

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(
        location => {
          console.log('In here', location);

          const lat = location.coords.latitude;
          const lng = location.coords.longitude;
          var a = getByMonth({
            month: 7,
            year: 2022,
            long: lng,
            lat: lat,
            method: 'Karachi',
            timeFormat: '12h',
          });
          setPrayerData(a);
        },
        error => {
          console.log('in error of location permission', error);
          // ERROR CODES:
          // 1: No Permission
          // 2: Location is disables
          // 3: Time out

          if (error.code === 1) {
            alert('Please allow permission');
            // setLocationModal(!locationModal);
          } else if (error.code === 2) {
            alert('please turn on location');
            // setLocationModal1(!locationModal1);

            // Alert.aler('Please enable device loaction!');
          } else {
            alert('something when wrong');
          }
        },
      );
    } catch {
      console.log('In catch');
    }
  }, []);
  console.log(prayerData);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={
            index === 0
              ? [titleContainer1, {paddingTop: 12, marginBottom: 6}]
              : titleContainer
          }
          activeOpacity={0.7}>
          <Text
            style={[
              titleText,
              index === 0 ? null : {color: colors.darkBlue},
              RalewayBold,
            ]}>
            {item.title}
          </Text>
          <Text
            style={[
              titleText,
              index === 0 ? null : {color: colors.darkBlue},
              RalewayMedium,
            ]}>
            {item.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={container}>
      <Header title={'Home'} navigation={navigation} />
      <View style={innerContainer}>
        <FlatList
          data={data}
          contentContainerStyle={{
            marginHorizontal: 39,
            marginTop: 30,
            borderColor: colors.orangeMedium,
            borderWidth: 1,
            borderRadius: 15,
            backgroundColor: '#fff',
            elevation: 4,
            margin: 5,
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
    flex: 1,

    backgroundColor: colors.orangeExtraLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    elevation: 5,
  },
  titleContainer: {
    // alignItems: 'center',
    // borderWidth: 2,
    // borderColor: colors.primaryColor,
    // borderRadius: 30,
    // padding: 15,
    // backgroundColor: '#ffe8c6',
    // marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer1: {
    // alignItems: 'center',
    // borderWidth: 2,
    // borderColor: colors.primaryColor,
    // borderRadius: 30,
    // padding: 15,
    backgroundColor: colors.orangeLight,
    // marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 17,
    paddingBottom: 12,
    paddingHorizontal: 20,
    color: colors.orangeDark,
  },
});

export default HomeScreen;
