import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {prayerTabe} from '../../components/PrayerTableData';
import {colors} from '../../styles/colors';

const PrayerDetailScreen = props => {
  const {container, headerText, tableHeader, itemText, tableContainer} = styles;
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <Text numberOfLines={1} style={[itemText]}>
          {item.Dato}
        </Text>
        <Text style={[itemText]}>{item.Imsak}</Text>
        <Text style={[itemText]}>{item.Fajr}</Text>
        <Text style={[itemText]}>{item.Solopp}</Text>
        <Text style={[itemText]}>{item.Dhur}</Text>
        <Text style={[itemText]}>{item.Solned}</Text>
        <Text style={[itemText]}>{item.Maghrib}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: colors.orangeMedium}}>
      <ScrollView style={container}>
        <Text style={headerText}>{props.route.params.title}</Text>
        <View
          style={{
            borderColor: colors.orangeDark,
            borderWidth: 1,
            borderRadius: 15,
            marginBottom: 30,
            elevation: 10,
            marginHorizontal: 20,
            marginTop: 5,
          }}>
          <View style={tableContainer}>
            <Text style={[tableHeader, {textAlign: 'left'}]}>Dato</Text>
            <Text style={[tableHeader]}>Imsak</Text>
            <Text style={[tableHeader]}>Fajr</Text>
            <Text style={[tableHeader]}>Solopp</Text>
            <Text style={[tableHeader]}>Dhur</Text>
            <Text style={[tableHeader]}>Solned</Text>
            <Text style={[tableHeader, {textAlign: 'right'}]}>Maghrib</Text>
          </View>
          <FlatList
            data={prayerTabe}
            contentContainerStyle={{
              backgroundColor: '#fff',
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              paddingBottom: 10,
            }}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orangeExtraLight,
  },
  headerText: {
    fontSize: 18,
    color: 'grey',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
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
