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

const DuaTab = ({navigation}) => {
  const {container, innerContainer, titleContainer, titleText} = styles;
  const data = [
    {title: 'DUA AHD', id: 1, header: 'Dua Fajr', data: 'Fajr'},
    {title: 'DUA FARAJ', id: 2, header: 'Dua Dhur', data: 'Dhur'},
    {title: 'DUA IFTITAH', id: 3, header: 'Dua Asr', data: 'Asr'},
    {title: 'DUA KUMAIL', id: 4, header: 'Dua Maghrib', data: 'Maghrib'},
    {title: 'DUA I RAMADAN', id: 5, header: 'Dua Isha', data: 'Isha'},
    {title: 'DUA TAWASSUL', id: 5, header: 'Dua Isha', data: 'Isha'},
  ];
  const {RalewaySemiBold, RalewayBold} = Fonts;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DuaTabDetail', {
            title: item.header,
            data: item.data,
            id: item.id,
          })
        }
        style={titleContainer}
        activeOpacity={0.7}>
        <Text style={[titleText, RalewayBold]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={container}>
      <Header title={'VEIEN TIL ALLAH'} navigation={navigation} />
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

export default DuaTab;
