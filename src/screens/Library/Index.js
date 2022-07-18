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
import {colors} from '../../styles/colors';

const LibraryScreen = ({navigation}) => {
  const {container, innerContainer, titleContainer, titleText} = styles;
  const data = [
    {title: 'Profeten Mohammad', id: 1, data: 'Profeten Mohammad'},
    {title: 'Imam Ali', id: 2, data: 'Imam Ali'},
    {title: 'Fatima Zahra', id: 3, data: 'Fatima Zahra'},
    {title: 'Imam Hassan', id: 4, data: 'Imam Hassan'},
    {title: 'Imam Hussain', id: 5, data: 'Imam Hussain'},
    {title: 'Imam Ali Sajjad', id: 6, data: 'Imam Ali Sajjad'},
    {title: 'Imam Mohammad Baqir', id: 7, data: 'Imam Mohammad Baqir'},
    {title: 'Imam Jafar Sadiq', id: 8, data: 'Imam Jafar Sadiq'},
    {title: 'Imam Musa Kadhim', id: 9, data: 'Imam Musa Kadhim'},
    {title: 'Imam Ali Ridha', id: 10, data: 'Imam Ali Ridha'},
    {title: 'Imam Mohammad Jawad', id: 11, data: 'Imam Mohammad Jawad'},
    {title: 'Imam Ali Hadi', id: 12, data: 'Imam Ali Hadi'},
    {title: 'Imam Hassan Askari', id: 13, data: 'Imam Hassan Askari'},
    {title: 'Imam Mohammad Mahdi', id: 14, data: 'Imam Mohammad Mahdi'},
  ];
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('LibraryDetailScreen', {
            data: item.data,
            id: item.id,
          })
        }
        style={titleContainer}
        activeOpacity={0.7}>
        <Text style={titleText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={container}>
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
    backgroundColor: colors.orangeLight,
  },
  innerContainer: {},
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
    fontWeight: 'bold',
    color: colors.orangeMedium,
  },
});

export default LibraryScreen;
