import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dua} from '../../components/Data';
import Header from '../../components/Header';
import {colors} from '../../styles/colors';

const DuaScreen = props => {
  const {
    container,
    headerTitle,
    titleContainer,
    headerContainer,
    titleText,
    containerStyle,
    innerContainer,
  } = styles;
  //   useLayoutEffect(() => {
  //     props.navigation.setOptions({
  //       headerTitle: props.route.params.title,
  //     });
  //   }, []);

  const data = props.route.params.data;

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity style={titleContainer} activeOpacity={0.7}>
          <Text style={[titleText]}>{item.arabic}</Text>
          <Text style={[titleText, {marginBottom: 20}]}>{item.nor}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={container}>
      <Header title={'VEIEN TIL ALLAH'} navigation={props.navigation} />
      <ScrollView style={innerContainer}>
        <View style={headerContainer}>
          <Text style={headerTitle}>{props.route.params.title}</Text>
        </View>
        <FlatList
          data={
            data === 'Fajr'
              ? Dua.Fajr
              : data === 'Dhur'
              ? Dua.Dhur
              : data === 'Asr'
              ? Dua.Asr
              : data === 'Maghrib'
              ? Dua.Maghrib
              : Dua.Isha
          }
          contentContainerStyle={containerStyle}
          renderItem={renderItem}
        />
      </ScrollView>
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
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
  },
  titleContainer: {
    // alignItems: 'center',
    // borderWidth: 2,
    // borderColor: colors.primaryColor,
    // borderRadius: 30,
    // padding: 15,
    // backgroundColor: '#ffe8c6',
    // marginBottom: 25,
    justifyContent: 'space-between',
  },
  titleContainer1: {
    // alignItems: 'center',
    // borderWidth: 2,
    // borderColor: colors.primaryColor,
    // borderRadius: 30,
    // padding: 15,
    backgroundColor: colors.orangeMedium,
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
    color: '#000000',
    textAlign: 'center',
  },
  containerStyle: {
    marginHorizontal: 20,
    borderColor: colors.orangeMedium,
    borderWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 30,
    paddingTop: 10,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    elevation: 4,
  },
  headerContainer: {
    backgroundColor: colors.orangeLight,
    marginHorizontal: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginTop: 30,
    borderColor: colors.orangeMedium,
    borderWidth: 1,
    borderBottomWidth: 0,
    elevation: 4,
  },
  headerTitle: {
    textAlign: 'center',
    paddingVertical: 12,
    color: colors.orangeDark,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DuaScreen;
