import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import HomeScreen from '../screens/home';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';
import PrayerScreen from '../screens/prayer';
import QiblaScreen from '../screens/qibla';
import TaqibaatScreen from '../screens/taqibaat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fonts from '../styles/Fonts';
import DuaTab from '../screens/DuaTab/Index';
import DuaTabDetail from '../screens/DuaTabDetail.js/Index';
import LibraryScreen from '../screens/Library/Index';
import LibraryDetailScreen from '../screens/LibraryDetail/Index';
import AboutUsScreen from '../screens/AboutUs/Index';
import PrayerDetailScreen from '../screens/PrayerDetail';
import DuaScreen from '../screens/DuaTabDetail.js/Index';

const Tab = createBottomTabNavigator();

const {RalewaySemiBold} = Fonts;

const animate1 = {
  0: {scale: 0.5, translateY: 0},
  1: {scale: 1.2, translateY: -24},
};
const animate2 = {
  0: {scale: 1.2, translateY: -24},
  1: {scale: 1, translateY: 6},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.3},
  0.8: {scale: 0.7},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};
const TabButton = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // marginBottom: 30,
        elevation: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 80,
        paddingBottom: 0,
        backgroundColor: colors.orangeLight,
      }}>
      {TabArr.map((item, index) => {
        const isFocused = state.index === index;
        const textRef = useRef(null);
        const viewRef = useRef(null);
        const circleRef = useRef(null);
        useEffect(() => {
          if (isFocused) {
            viewRef.current.animate(animate1);
            circleRef.current.animate(circle1);
            textRef.current.transitionTo({scale: 1});
          } else {
            viewRef.current.animate(animate2);
            circleRef.current.animate(circle2);
            textRef.current.transitionTo({scale: 1});
          }
        }, [isFocused]);
        console.log(isFocused, item, '>><<<');
        return (
          <View style={{}}>
            <TouchableOpacity
              activeOpacity={1}
              style={tabStyle.container}
              onPress={() => {
                navigation.navigate(item.route);
              }}>
              <Animatable.View
                duration={700}
                ref={viewRef}
                style={tabStyle.container}>
                <View style={isFocused ? tabStyle.btn : null}>
                  <Animatable.View
                    duration={700}
                    ref={circleRef}
                    style={{
                      ...StyleSheet.absoluteFillObject,
                      backgroundColor: colors.orangeDark,
                      borderRadius: 25,
                    }}
                  />

                  <FontAwesome
                    color={isFocused ? 'white' : colors.orangeDark}
                    // style={{marginBottom: 5}}
                    size={25}
                    origin={item.origin}
                    name={item.name}
                  />
                </View>
                <Animatable.Text
                  style={[
                    {
                      fontSize: 12,
                      color: '#262444',
                      textAlign: 'center',
                      marginTop: 4,
                      marginBottom: 0,
                    },
                    RalewaySemiBold,
                  ]}
                  ref={textRef}>
                  {item.label}
                </Animatable.Text>
              </Animatable.View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const TabArr = [
  {
    route: 'HomeScreen',
    id: 1,
    label: 'Home',
    //   origin: ICON_TYPE.OCTICONS,
    name: 'home',
    component: HomeScreen,
  },
  {
    route: 'PrayerTableScreen',
    id: 2,
    //   origin: ICON_TYPE.TABLE,
    name: 'table',
    label: 'Prayer Table',
    component: PrayerScreen,
  },
  {
    route: 'QiblaScreen',
    label: 'Qibla',
    id: 3,
    //   origin: ICON_TYPE.COMPASS,
    name: 'compass',
    component: QiblaScreen,
  },
  {
    route: 'TaqibaatScreen',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: TaqibaatScreen,
  },
];
const screenArr = [
  {
    route: 'HomeScreen',
    id: 1,
    label: 'Home',
    //   origin: ICON_TYPE.OCTICONS,
    name: 'home',
    component: HomeScreen,
  },
  {
    route: 'PrayerTableScreen',
    id: 2,
    //   origin: ICON_TYPE.TABLE,
    name: 'table',
    label: 'Prayer Table',
    component: PrayerScreen,
  },
  {
    route: 'QiblaScreen',
    label: 'Qibla',
    id: 3,
    //   origin: ICON_TYPE.COMPASS,
    name: 'compass',
    component: QiblaScreen,
  },
  {
    route: 'TaqibaatScreen',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: TaqibaatScreen,
  },
  {
    route: 'PrayerDetailScreen',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: PrayerDetailScreen,
  },

  {
    route: 'DuaTab',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: DuaTab,
  },
  {
    route: 'DuaTabDetail',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: DuaTabDetail,
  },
  {
    route: 'LibraryScreen',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: LibraryScreen,
  },
  {
    route: 'LibraryDetailScreen',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: LibraryDetailScreen,
  },
  {
    route: 'AboutUsScreen',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: AboutUsScreen,
  },

  {
    route: 'DuaScreen',
    id: 4,
    label: 'Taqibaat',
    //   origin: ICON_TYPE.TEXT,
    name: 'file-text-o',
    component: DuaScreen,
  },
];

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <View style={{backgroundColor: colors.orangeExtraLight, elevation: 3}}>
          <TabButton {...props} />
        </View>
      )}
      screenOptions={{}}>
      {screenArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            options={({navigation}) => ({
              headerShown: false,
              // tabBarButton: props => <TabButton {...props} item={item} />,
            })}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const tabStyle = StyleSheet.create({
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 6,
    borderColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomTabs;
