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

const AboutUsScreen = ({navigation}) => {
  const {
    container,
    innerContainer,
    titleContainer,
    titleContainer1,
    titleText,
    aboutText,
    socialText,
  } = styles;
  const {RalewaySemiBold, RalewayMedium, RalewayBold} = Fonts;

  return (
    <View style={container}>
      <Header title={'VEIEN TIL ALLAH'} navigation={navigation} />
      <View style={innerContainer}>
        <Text style={[aboutText, RalewayMedium]}>
          Veien til Allah-prosjektet har et mål er å gjøre stoff om islam og
          muslimer lett tilgjengelig ved bruk av forskjellige typer medier. Vi
          ønsker å spre det riktige islamske budskapet samtidig som vi ønsker at
          islam skal bli forstått slik den bør forstås. Vi vil vise frem
          religionen som profeten Mohammad (fvmh) og hans Ahlulbayt (fvmh) holdt
          fast ved. I det offentlige rom er det et voksende behov for kjennskap
          til islam. Vi håper at alle sammen, muslimer som ikke-muslimer, har
          gleden av å bruke kunnskapen «Veien til Allah»-prosjektet tilbyr. Følg
          oss gjerne på:
        </Text>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginRight: 5}}
              name="logo-facebook"
              size={20}
              color={colors.darkBlue}
            />
            <Text style={[socialText, RalewaySemiBold]}>veientilallah</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 20, marginRight: 5}}
              name="logo-instagram"
              size={20}
              color={colors.darkBlue}
            />
            <Text style={[socialText, RalewaySemiBold]}>veientilallah</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginRight: 5}}
              name="logo-youtube"
              size={20}
              color={colors.darkBlue}
            />
            <Text style={[socialText, RalewaySemiBold]}>veientilallah</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              style={{marginLeft: 20, marginRight: 5}}
              name="logo-twitter"
              size={20}
              color={colors.darkBlue}
            />
            <Text style={[socialText, RalewaySemiBold]}>veientilallah</Text>
          </View>
        </View>
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
    paddingHorizontal: 20,
  },
  socialText: {
    color: colors.darkBlue,
  },
  aboutText: {
    fontSize: 16,
    marginTop: 30,
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

export default AboutUsScreen;
