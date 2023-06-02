import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, StyleSheet, View} from 'react-native';
import SignIn from '../screens/SignIn/SignIn';
import Register from '../screens/Register/Register';
import GetStarted from '../screens/GetStarted/GetStarted';
import BottomTab from './Tabs';
import BookAppointment from '../screens/BookAppointment/BookAppointment';
import EditAppointment from '../screens/EditAppointment/EditAppointment';
import NoteDetail from '../screens/NoteDetail/NoteDetail';
import Pendingnotes from '../screens/Pendingnotes/Pendingnotes';
import PreviousNotes from '../screens/PreviousNotes/PreviousNotes';
import DraftNotes from '../screens/DraftNotes/DraftNotes';
import Createmessage from '../screens/Createmessage/Createmessage';
import Message from '../screens/Message/Message';
import Draftmessage from '../screens/Draftmessage/Draftmessage';
import Orders from '../screens/Orders/Orders';
import Detailnotes from '../screens/Detailnotes/Detailnotes';
import DraftNotedetail from '../screens/DraftNotesdetail/DraftNotesdetail';
import Createnotes from '../screens/CreateNotes/CreateNotes';
import Createvisit from '../screens/CreateVisit/CreateVisit';
import Createpatient from '../screens/Createpatient/Createpatient';
import ChangePassword from '../screens/ChangePassword/ChangePassword';
import Preferences from '../screens/Preferences/Preferences';
import Profile from '../screens/Profile/Profile';
import StaffsProfile from '../screens/StaffsProfile/StaffsProfile';
import DashBoard from '../screens/DashBoard';
import Location from '../screens/Location';
const Stack = createNativeStackNavigator();

const MainStack = ({navigation, style}) => {
  return (
    // <Animated.View style={[styles.stack, style]}>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'GetStarted'}>
      {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="NoteDetail" component={NoteDetail} />
      <Stack.Screen name="Createvisit" component={Createvisit} />
      <Stack.Screen name="BookAppointment" component={BookAppointment} />
      <Stack.Screen name="EditAppointment" component={EditAppointment} />
      <Stack.Screen name="Pendingnotes" component={Pendingnotes} />
      <Stack.Screen name="PreviousNotes" component={PreviousNotes} />
      <Stack.Screen name="Createpatient" component={Createpatient} />
      <Stack.Screen name="DraftNotes" component={DraftNotes} />
      <Stack.Screen name="Createmessage" component={Createmessage} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Draftmessage" component={Draftmessage} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Detailnotes" component={Detailnotes} />
      <Stack.Screen name="Createnotes" component={Createnotes} />
      <Stack.Screen name="DraftNotedetail" component={DraftNotedetail} />
      {/* <Stack.Screen name="Drawer" component={Drawer} /> */}
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="Preferences" component={Preferences} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="StaffsProfile" component={StaffsProfile} />
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
    // </Animated.View>
  );
};

export default MainStack;
const styles = StyleSheet.create({
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
});
