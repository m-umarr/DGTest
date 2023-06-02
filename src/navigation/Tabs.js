import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Schedule from '../screens/Schedule/Schedule';
import Inbox from '../screens/Inbox/Inbox';
import Profile from '../screens/Profile/Profile';
import Patient from '../screens/Patient/Patient';
import Experience from '../screens/Experience/Experience';
import Createvisit from '../screens/CreateVisit/CreateVisit';
import {Images, Colors} from '../components/index';
import Createpatient from '../screens/Createpatient/Createpatient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const CustomTabBarButton = ({children, onPress}) => {
    return (
      <TouchableOpacity
        style={{
          top: Platform.OS == 'ios' ? -40 : -55,
          justifyContent: 'center',
          alignItems: 'center',
          ...styles.shadow,
        }}
        onPress={onPress}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 35,
              backgroundColor: Colors.primary,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {children}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Inbox"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        tabBarStyle: {
          backgroundColor: Colors.tabviewbordercolor,
          position: 'absolute',
          borderTopWidth: 0,
          height: hp(8.5),
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: hp(3),
        },
      }}>
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerShown: false,
          tabBarLabel: '',

          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.mainview}>
                <Image source={Images.inbox} style={styles.icons1} />
                <Text
                  style={{...styles.labeltext, color: Colors.textColorWhite}}>
                  Inbox
                </Text>
              </View>
            ) : (
              <View style={styles.mainview}>
                <Image source={Images.inbox} style={styles.icons} />
                <Text style={{...styles.labeltext, color: Colors.inactivetext}}>
                  Inbox
                </Text>
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.mainview}>
                <Image source={Images.Schedule} style={styles.icons1} />
                <Text
                  style={{...styles.labeltext, color: Colors.textColorWhite}}>
                  Schedule
                </Text>
              </View>
            ) : (
              <View style={styles.mainview}>
                <Image source={Images.Schedule} style={styles.icons} />
                <Text style={{...styles.labeltext, color: Colors.inactivetext}}>
                  Schedule
                </Text>
              </View>
            ),
        }}
      />

      {/* <Tab.Screen name='Profile' component={Profile} 

     options={{
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => (
           
            focused?
            <View style={styles.mainview}>
                <Image source={Images.profile} style={{alignSelf:'center',borderWidth:0,marginTop:hp(1.6),borderColor:'red',...styles.icons1}} />
               
                </View>
                :
                <View style={styles.mainview}>
                <Image source={Images.profile} style={{tintColor:'white',alignSelf:'center',borderWidth:0,marginTop:hp(1.6),borderColor:'red',...styles.icons}}  />
          
               
                </View>
                 ),
                 tabBarButton:(props)=>(
                    <CustomTabBarButton {...props}/>
                 )
        
        
      
    }} /> */}
      <Tab.Screen
        name="Createpatient"
        component={Createpatient}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.mainview}>
                <Image source={Images.Patient} style={styles.icons1} />
                <Text
                  style={{...styles.labeltext, color: Colors.textColorWhite}}>
                  Patient
                </Text>
              </View>
            ) : (
              <View style={styles.mainview}>
                <Image source={Images.Patient} style={styles.icons} />
                <Text style={{...styles.labeltext, color: Colors.inactivetext}}>
                  Patient
                </Text>
              </View>
            ),
        }}
      />

      <Tab.Screen
        name="Createvisit"
        component={Createvisit}
        options={{
          headerShown: false,
          tabBarLabel: '',

          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.mainview}>
                <Image source={Images.bookmark} style={styles.icons1} />
                <Text
                  style={{...styles.labeltext, color: Colors.textColorWhite}}>
                  Visit
                </Text>
              </View>
            ) : (
              <View style={styles.bookmark}>
                <Image source={Images.bookmark} style={styles.icons} />
                <Text style={{...styles.labeltext, color: Colors.inactivetext}}>
                  Visit
                </Text>
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  TabStyle: {
    backgroundColor: Colors.tabBackGroundcolor,
    borderTopWidth: 0,
    height: wp(10),
  },
  labeltext: {
    borderWidth: 0,
    marginTop: 5,
    fontSize: wp(3),
    fontWeight: '500',
    alignSelf: 'center',
  },
  mainview: {
    borderWidth: 0,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  icons: {width: 25, height: 25},
  icons1: {width: 25, height: 25, tintColor: 'white'},
  iconsactive: {width: 25, height: 25, marginTop: 2},
  shadow: {
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    overflow: 'visible',
    shadowOpacity: 1.25,

    shadowRadius: 0,
    elevation: 5,
  },
});
