import React, {useEffect, useState} from 'react';
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
import {colors} from '../../styles/colors';
import Geolocation from '@react-native-community/geolocation';
import Header from '../../components/Header';
import Fonts from '../../styles/Fonts';
import {getByDay, getByMonth} from 'prayertiming';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import Sound from 'react-native-sound';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const HomeScreen = ({navigation}) => {
  const {
    container,
    innerContainer,
    titleContainer,
    titleContainer1,
    titleText,
  } = styles;
  const {RalewaySemiBold, RalewayMedium, RalewayBold} = Fonts;
  // const [timer, setTimer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [playing1, setPlaying1] = useState(false);
  const [prayer, setPrayer] = useState();
  const [music, setMusic] = useState(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const data = [
    {title: 'Oslo', time: 'July 15', id: 1},
    {title: 'Imsak', time: '01:23', id: 2},
    {title: 'Fajr', time: '01:53', id: 3},
    {title: 'Sunrise', time: '04:24', id: 5},
    {title: 'Dhur', time: '13:23', id: 4},
    {title: 'Asr', time: '17:57', id: 16},
    {title: 'Sunset', time: '22:23', id: 131},
    {title: 'Maghrib', time: '22:53', id: 121},
    {title: 'Isha', time: '23:30', id: 13},
    {title: 'Midnight', time: '00-07', id: 11},
  ];
  // console.log(data);
  var a;
  useEffect(() => {
    a = getByDay({
      date: new Date(),
      year: 2022,
      long: 72.8464144,
      lat: 19.1873139,
      method: 'Karachi',
      timeFormat: '24h',
    });
    setPrayer({
      fajr: a.fajr,
      dhur: a.dhuhr,
      asr: a.asr,
      maghrib: a.maghrib,
      isha: a.isha,
    });
  }, []);
  // console.log(prayer);
  var sound;
  const playSound = (item, id) => {
    sound = new Sound(
      'https://www.islamcan.com/audio/adhan/azan1.mp3',
      null,
      (error, _sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }

        // stopSound();
        // sound.pause;
        setDuration(sound.getDuration());
        sound.setCurrentTime(currentTime),
          sound.getCurrentTime(seconds => console.log('ata ' + seconds)),
          // sound.getCurrentTime(seconds => setCurrentTime(seconds));
          // sound.pause();
          sound.play(() => {
            sound.release();
          });
      },
    );
    setMusic(sound);
    setPlaying(false);
  };
  const pauseSound = index => {
    // music.getCurrentTime(seconds => setCurrentTime(seconds));
    // music.setCurrentTime(currentTime);

    // music.setCurrentTime(0);
    setPlaying(true);
    music.pause();

    music.getCurrentTime(seconds => setCurrentTime(seconds));
    music.getCurrentTime(seconds => console.log('pause at', seconds));

    console.log('paused');
  };

  // useEffect(() => {
  const timer = () => {
    var time;
    var currentTime = new Date().toLocaleTimeString();
    var now = moment(currentTime, 'HH:mm');
    var then = moment('1:00:00', 'HH:mm');
    //this return the difference between now and then in milliseconds as default

    var timeDifference = parseInt(now.diff(then, 'seconds', true));
    time = timeDifference;
    // setTimer(timeDifference);
    return (
      <View
        style={{
          backgroundColor: colors.orangeExtraLight,
          alignItems: 'center',
          paddingTop: 15,
        }}>
        <Text style={[{fontSize: 16}, RalewayBold]}>Next : Isha</Text>
        <CountDown
          size={22}
          until={time}
          onFinish={() => alert('Finished')}
          digitStyle={{
            backgroundColor: colors.orangeExtraLight,
            borderColor: '#fff',
            width: 30,
            borderRadius: 100,
          }}
          digitTxtStyle={{color: colors.darkBlue}}
          timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
          separatorStyle={{color: colors.darkBlue, marginBottom: 5}}
          timeToShow={['H', 'M']}
          timeLabels={{m: null, s: null}}
          showSeparator
        />
      </View>
    );
  };

  // setTimeout(() => {
  //   setTimer(Math.abs(timeDifference));
  // }, 1000);
  // }, []);
  // for (const item in prayer) {
  //   console.log(prayer[item]);
  // }

  console.log(timer);

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
  console.log(currentTime, '>>>>>><<<');
  return (
    <View style={container}>
      <Header title={'Home'} navigation={navigation} />
      <ScrollView style={innerContainer}>
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

        {timer()}
        <View
          style={{
            backgroundColor: colors.orangeExtraLight,
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <CountdownCircleTimer
            isPlaying={!playing}
            duration={duration}
            size={100}
            strokeWidth={8}
            colors={colors.darkBlue}>
            {({remainingTime}) => (
              <TouchableOpacity
                onPress={playing ? playSound : pauseSound}
                style={{marginLeft: 5}}>
                <Ionicons
                  name={playing ? 'play' : 'pause'}
                  size={60}
                  color={colors.darkBlue}
                />
              </TouchableOpacity>
            )}
          </CountdownCircleTimer>
        </View>
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
    flex: 1,

    backgroundColor: colors.orangeExtraLight,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 5,
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

export default HomeScreen;
