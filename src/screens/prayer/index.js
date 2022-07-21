import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {prayerTabe} from '../../components/PrayerTableData';
import {colors} from '../../styles/colors';
import Header from '../../components/Header';
import Geolocation from '@react-native-community/geolocation';
import {getByMonth} from 'prayertiming';
import Fonts from '../../styles/Fonts';
let dateArr = [];
const PrayerDetailScreen = props => {
  const {container, headerText, tableHeader, itemText, tableContainer} = styles;
  var date = new Date();
  console.log(date.getMonth() + 1);
  const [prayerData, setPrayerData] = useState('');
  const [month, setMonth] = useState(date.getMonth());
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    try {
      Geolocation.getCurrentPosition(
        location => {
          // console.log('In here', location);

          const lat = location.coords.latitude;
          const lng = location.coords.longitude;
          console.log(lat, lng);
          var a = getByMonth({
            month: month,
            year: 2022,
            long: lng,
            lat: lat,
            method: 'Karachi',
            timeFormat: '24h',
          });
          // setPrayerData(a);

          for (let i = 0; i < a.length; i++) {
            dateArr = [...dateArr, a[i]];
          }
          setPrayerData(dateArr);
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
  }, [month]);

  useEffect(() => {
    if (showMore) {
      if (month < 11) {
        setMonth(month + 1);
      } else if (month === 12) {
        setShowMore(false);
      }
    }
  }, [showMore, month]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <Text numberOfLines={1} style={[itemText]}>
          {item.date.getDate() +
            '/' +
            item.date.getMonth() +
            '/' +
            item.date.getYear().toString().charAt(1) +
            item.date.getYear().toString().charAt(2)}
        </Text>
        <Text style={[itemText]}>{item.imsak}</Text>
        <Text style={[itemText]}>{item.fajr}</Text>
        <Text style={[itemText]}>{item.sunrise}</Text>
        <Text style={[itemText]}>{item.dhuhr}</Text>
        <Text style={[itemText]}>{item.sunset}</Text>
        <Text style={[itemText]}>{item.maghrib}</Text>
      </View>
    );
  };
  console.log(
    date.getMonth() + 1,
    '><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<',
  );
  // useEffect(() => {
  //   if (
  //     prayerData.length === 31 ||
  //     prayerData.length === 62 ||
  //     prayerData.length === 61 ||
  //     prayerData.length === 60 ||
  //     prayerData.length === 60
  //   ) {
  //     // setMonth(month + 1);
  //   }
  // }, [prayerData.length]);

  const {RalewayBlack, RalewaySemiBold, RalewayMedium, RalewayBold} = Fonts;
  return (
    <View style={{flex: 1, backgroundColor: colors.orangeMedium}}>
      <Header title={'Prayer'} navigation={props.navigation} />
      <View style={container}>
        {/* <Text style={headerText}>{'title'}</Text> */}
        <View
          style={{
            borderRadius: 15,
            elevation: 10,
            marginHorizontal: 20,
            marginTop: 22,
            flex: 1,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: colors.orangeDark,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}>
          <View style={tableContainer}>
            <Text style={[tableHeader, {}]}>Dato</Text>
            <Text style={[tableHeader]}>Imsak</Text>
            <Text style={[tableHeader]}>Fajr</Text>
            <Text style={[tableHeader]}>Solopp</Text>
            <Text style={[tableHeader]}>Dhur</Text>
            <Text style={[tableHeader]}>Solned</Text>
            <Text style={[tableHeader, {textAlign: 'right'}]}>Maghrib</Text>
          </View>
          <View style={{flex: 1}}>
            <FlatList
              bounces={false}
              showsVerticalScrollIndicator={false}
              data={prayerData}
              contentContainerStyle={{
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                paddingBottom: 10,

                borderTopWidth: 0,
                paddingBottom: 10,
              }}
              renderItem={renderItem}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setShowMore(true)}>
          <Text
            style={[
              {
                color: colors.darkBlue,
                margin: 20,
                textAlign: 'center',
                fontSize: 17,
                marginBottom: 40,
              },
              RalewayBold,
            ]}>
            Show More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeExtraLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 30,
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    color: 'grey',
    marginHorizontal: 20,
    marginTop: 20,
  },
  tableHeader: {
    color: colors.orangeDark,
    fontSize: 13,
    flex: 1,
    textAlign: 'center',
  },
  itemText: {
    color: '#000000',
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
  },
  tableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    backgroundColor: colors.orangeLight,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 10,
  },
});

export default PrayerDetailScreen;
