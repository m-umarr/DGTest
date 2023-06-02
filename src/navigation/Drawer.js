/* eslint-disable react-native/sort-styles */
/* eslint-disable import/order */
import React, {useState} from 'react';
import {Image, StyleSheet, View, Alert} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import Schedule from '../screens/Schedule/Schedule';
// import Inbox from '../screens/Inbox/Inbox';
// import Profile from '../screens/Profile/Profile';
// import Patient from '../screens/Patient/Patient';
// import Experience from '../screens/Experience/Experience';
// import Preferences from '../screens/Preferences/Preferences';
// import ChangePassword from '../screens/ChangePassword/ChangePassword';
import {Images, Colors} from '../components/index';
import MainStack from './MainStack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
const Drawer = createDrawerNavigator();

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <DrawerItem
        label="Dashboard"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('DashBoard')}
      />
      <DrawerItem
        label="Profile"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('Profile')}
      />
      <DrawerItem
        label="Preferences"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('Preferences')}
      />
      <DrawerItem
        label="Change Password"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('ChangePassword')}
      />
      <DrawerItem
        label="Location"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('Location')}
      />
      <DrawerItem
        label="Staff Profile"
        labelStyle={styles.drawerLblStyle}
        onPress={() => props.navigation.navigate('StaffsProfile')}
      />
      <DrawerItem
        label="LogOut"
        labelStyle={styles.drawerLblStyle}
        onPress={() =>
          Alert.alert('Logout', 'Are You Sure you want to Logout?', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'LOGOUT',
              onPress: () => props.navigation.navigate('GetStarted'),
            },
          ])
        }
      />
    </DrawerContentScrollView>
  );
};

const MainDrawer = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));
  // const scale = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [1, 0.8],
  // });
  // const borderRadius = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [0, 10],
  // });

  // const animatedStyle = {borderRadius, transform: [{scale}]};
  return (
    <Drawer.Navigator
      backBehavior="none"
      // initialRouteName="Inbox"
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={styles.drawerStyles}
      contentContainerStyle={styles.container}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
      }}
      // drawerContentOptions={{
      //   activeBackgroundColor: 'transparent',
      //   activeTintColor: 'white',
      //   inactiveTintColor: 'white',
      // }}
      sceneContainerStyle={styles.scene}
      drawerContent={props => (
        // setProgress(props.progress);
        <DrawerContent {...props} />
      )}>
      <Drawer.Screen name="MainStack">
        {props => <MainStack {...props} />}
        {/* {(props) => <MainStack {...props} style={animatedStyle} />} */}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default MainDrawer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: 20,
  },
});
