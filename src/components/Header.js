import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
import Fonts from '../styles/Fonts';

const Header = props => {
  const {container, headerText} = styles;
  const {RalewaySemiBold, RalewayBold} = Fonts;
  return (
    <View style={container}>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Ionicons name="menu" size={25} color={colors.darkBlue} />
      </TouchableOpacity>
      <Text style={[headerText, RalewayBold]}>{props.title}</Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={25} color={colors.darkBlue} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    color: colors.darkBlue,
  },
});

export default Header;
