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
const TabButton = props => {
  const focused = props.accessibilityState.selected;
  const textRef = useRef(null);
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 1});
    }
  }, [focused]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={tabStyle.container}
      onPress={props.onPress}>
      <Animatable.View duration={700} ref={viewRef} style={tabStyle.container}>
        <View style={focused ? tabStyle.btn : null}>
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
            color={focused ? 'white' : colors.orangeDark}
            // style={{marginBottom: 5}}
            size={25}
            // origin={props.item.origin}
            name={props.item.name}
          />
        </View>
        <Animatable.Text
          style={[
            {
              fontSize: 12,
              color: '#262444',
              textAlign: 'center',
              marginTop: 4,
            },
            RalewaySemiBold,
          ]}
          ref={textRef}>
          {props.item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
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

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 80,
          backgroundColor: '#ffe8c6',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderTopWidth: 0,
          position: 'absolute',
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            options={({navigation}) => ({
              headerShown: false,
              headerTitle: item.label,
              tabBarLabel: item.label,
              headerTitleAlign: 'center',
              headerStyle: {backgroundColor: colors.orangeMedium},
              headerTintColor: '#fff',
              headerTitleStyle: {fontSize: 22},
              tabBarIcon: ({color, focused}) => (
                <FontAwesome
                  // style={{marginBottom: 5}}
                  name={item.name}
                  size={20}
                />
              ),
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
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
