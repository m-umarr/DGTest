import { View, StyleSheet ,TouchableOpacity,FlatList,Modal} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,Simpleheader,Button,Images,InputField,Icons,Dropdown} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import { color } from 'react-native-reanimated';

const BookAppointment = (props) => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  return (
    <Container backgroundColor={Colors.statusbarcolor}>
        <Simpleheader
        title={'Book Appointment'}
        navigation={props.navigation}/>
        <View style={styles.inputview}>
        <InputField
        placeholder={'Patient Name'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>
        <View style={styles.dropdown}>
  <Dropdown
  data={countries}
  borderColor={Colors.borderColor}
  width={wp(90)}
  defaultButtonText={'Location'}
  textcolor={Colors.grayText}
  onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  />
</View>

<View style={styles.dropdown}>
  <Dropdown
  data={countries}
  borderColor={Colors.borderColor}
  width={wp(90)}
  defaultButtonText={'Appointment Type'}
  textcolor={Colors.grayText}
  onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  />
</View>
<View style={styles.dropdown}>
  <Dropdown
  data={countries}
  borderColor={Colors.borderColor}
  width={wp(90)}
  defaultButtonText={'Provider Type'}
  textcolor={Colors.grayText}
  onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  />
</View>
<View style={styles.dropdown}>
  <Dropdown
  data={countries}
  borderColor={Colors.borderColor}
  width={wp(90)}
  defaultButtonText={'Provider Name'}
  textcolor={Colors.grayText}
  onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  />
</View>
<View style={styles.inputview}>
        <InputField
        placeholder={'Appointment Date'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        righticon={'calendar'}
        />
        </View>
        <View style={styles.inputview}>
        <InputField
        placeholder={'Appointment Time'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>
        <View style={styles.rowview}>


        <InputField
        placeholder={'Duration'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        width={wp(35)}
        />

  <Dropdown
  data={countries}
  borderColor={Colors.borderColor}
  width={wp(45)}
  defaultButtonText={'Frequency'}
  textcolor={Colors.grayText}
  onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  />

        </View>
        <View style={styles.btnview}>
            <Button
            title={'Update Booking'}
            onPress={()=>props.navigation.goBack()}/>
        </View>
   </Container>
  )
}

export default BookAppointment

const styles = StyleSheet.create({
    inputview:{borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),
        marginHorizontal:wp(5),
        justifyContent:'center',
        alignContent:'center'  },
        rowview:{
            borderWidth:0,marginTop:hp(2),flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(5),
            alignItems:'center'
        },
        dropdown:{
            borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),borderRadius:10  },
            btnview:{marginTop:hp(10),borderWidth:0,alignItems:'center',marginHorizontal:wp(5),justifyContent:'center'}
})