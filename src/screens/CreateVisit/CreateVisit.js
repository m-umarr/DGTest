import { View, StyleSheet ,ScrollView,FlatList,Modal} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,Simpleheader,Button,Images,InputField,Icons,Dropdown} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Createvisit = (props) => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  return (
    <Container backgroundColor={Colors.statusbarcolor}>
        {/* <Simpleheader
        title={'Create Visit'}
        navigation={props.navigation}/> */}

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{marginBottom:hp(5)}}>
        <View style={{...styles.inputview,marginTop:hp(4)}}>
        <InputField
        placeholder={'Patient Name'}
        // value={''}
  fontSize={16}

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
  fontSize={16}

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
  fontSize={16}

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
  fontSize={16}
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
  fontSize={16}
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
  fontSize={16}
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
            title={'Create Booking'}
            onPress={()=>props.navigation.goBack()}/>
        </View>
        </ScrollView>
   </Container>
  )
}

export default Createvisit

const styles = StyleSheet.create({
    inputview:{borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),
        marginHorizontal:wp(5),
        justifyContent:'center',
        alignContent:'center'  },
        rowview:{
            borderWidth:0,marginTop:hp(2),flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(5),
            alignItems:'center',
        },
        dropdown:{
            borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),borderRadius:10  },
            btnview:{marginTop:hp(10),borderWidth:0,alignItems:'center',marginHorizontal:wp(5),justifyContent:'center'}
})