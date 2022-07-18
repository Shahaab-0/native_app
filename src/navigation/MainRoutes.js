import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import BottomTabs from './BottomTab';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerProgress,
} from '@react-navigation/drawer';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../styles/colors';
import DuaScreen from '../screens/dua';
import PrayerDetailScreen from '../screens/PrayerDetail';
import LibraryScreen from '../screens/Library/Index';
import LibraryDetailScreen from '../screens/LibraryDetail/Index';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerContent = props => {
  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: colors.darkBlue,
        width: '100%',
        marginTop: '30%',
      }}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <DrawerItem
          label="Home"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('HomeScreen')}
        />
        <View style={styles.line} />
        <DrawerItem
          label="Prayer Table"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('PrayerTableScreen')}
        />
        <View style={styles.line} />
        <DrawerItem
          label="Qibla"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('QiblaScreen')}
        />
        <View style={styles.line} />
        <DrawerItem
          label="Taqibaat"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('TaqibaatScreen')}
        />
        <View style={styles.line} />
        <DrawerItem
          label="Library"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate('LibraryScreen')}
        />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

export const Screens = ({navigation, style}) => {
  const progress = useDrawerProgress();

  const ourStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 20]);
    return {transform: [{scale}], borderRadius};
  });
  return (
    <Animated.View style={[ourStyle, {flex: 1, overflow: 'hidden'}]}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {backgroundColor: colors.orangeMedium},
          headerLeft: () => (
            <TouchableOpacity onPress={navigation.openDrawer}>
              <Ionicons name="menu" size={25} color={'#fff'} />
            </TouchableOpacity>
          ),
          headerRight: props => {
            return (
              <TouchableOpacity
                style={{marginRight: 15}}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={25} color={'#fff'} />
              </TouchableOpacity>
            );
          },
        }}>
        <Stack.Screen
          options={{headerTitle: ''}}
          name="BottomTab"
          component={BottomTabs}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Dua',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name="DuaScreen"
          component={DuaScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: 'VEIEN TIL ALLAH',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name="PrayerDetailScreen"
          component={PrayerDetailScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: 'VEIEN TIL ALLAH',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name="LibraryScreen"
          component={LibraryScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: 'VEIEN TIL ALLAH',
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
          name="LibraryDetailScreen"
          component={LibraryDetailScreen}
        />
      </Stack.Navigator>
    </Animated.View>
  );
};

export default () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.darkBlue}}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            width: '50%',
            flex: 1,
            backgroundColor: colors.darkBlue,
          },
          headerTransparent: true,
          sceneContainerStyle: {backgroundColor: 'transparent'},
        }}
        drawerContent={props => {
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen options={{headerShown: false}} name="Screens">
          {props => <Screens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  line: {
    borderBottomWidth: 0.6,
    borderColor: '#fff',
    width: '60%',
    marginVertical: 5,
    marginLeft: 19,
  },
  scene: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    backgroundColor: 'transparent',
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
  drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
  menu: {
    width: 38,
    height: 38,
    margin: 20,
  },
  drawerLblStyle: {
    fontWeight: '500',
    fontSize: 18,
    color: '#fff',
  },
});
