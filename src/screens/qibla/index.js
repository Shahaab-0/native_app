import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../styles/colors';
import CompassHeading from 'react-native-compass-heading';
import Header from '../../components/Header';

const QiblaScreen = props => {
  const [compassHeading, setCompassHeading] = useState(0);
  const {container} = styles;
  useEffect(() => {
    const degree_update_rate = 3;

    // accuracy on android will be hardcoded to 1
    // since the value is not available.
    // For iOS, it is in degrees
    CompassHeading.start(degree_update_rate, ({heading, accuracy}) => {
      console.log(degree_update_rate);
      setCompassHeading(heading);
    });

    return () => {
      CompassHeading.stop();
    };
  }, []);
  console.log(compassHeading);

  return (
    <View style={container}>
      <Header title={'Prayer'} navigation={props.navigation} />
      <View
        style={{
          backgroundColor: colors.orangeExtraLight,
          flex: 1,
          marginTop: 30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 30,
        }}>
        <Image
          style={[
            styles.image,
            {transform: [{rotate: `${360 - compassHeading}deg`}]},
          ]}
          resizeMode="contain"
          source={{
            uri: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/c9/eb/64/c9eb64f9-f3c9-c7a1-6e41-6e7c532ed01d/source/512x512bb.jpg',
          }}
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
  image: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
  },
});

export default QiblaScreen;
