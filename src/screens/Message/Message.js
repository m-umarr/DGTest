import { View, StyleSheet ,TouchableOpacity,FlatList,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,CommentsInput,Simpleheader,ResponsiveText,Images,InputField,Icons,Dropdown,Button} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import { color } from 'react-native-reanimated';

const Message = (props) => {

 

  return (
    <Container backgroundColor={Colors.textColorWhite}>
        <Simpleheader
        title={'Message'}
        headercontainer={{backgroundColor:Colors.textColorWhite}}
        navigation={props.navigation}/>
       <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{...styles.graybckground,marginHorizontal:wp(4)}}>
            <View style={styles.rowview}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'staff/Paitent:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'Paitent'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Urgent:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text,paddingLeft:wp(6)}}>
                {'Yes'}
              </ResponsiveText>
            </View>

            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Subject:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'Appointment Booking Success'}
              </ResponsiveText>
            </View>
            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Date:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'8/17/2022'}
              </ResponsiveText>
            </View>
            <View style={{...styles.rowview, marginTop: 10}}>
              <ResponsiveText style={{...styles.text, color: '#646464'}}>
                {'Time:'}
              </ResponsiveText>
              <ResponsiveText style={{...styles.text}}>
                {'02:46:00'}
              </ResponsiveText>
            </View>

          </View>

   <View style={styles.inputview}>
        <CommentsInput
        placeholder={'Staff Comment'}
        value={`Your appointment booked successfully. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(25)}
        editabl={false}
        style={{paddingVertical:30,textAlignVertical:'center'}}
        />
        </View>
      
 {/* <View style={styles.btnview}>
            <Button
            title={'Update Booking'}
            onPress={()=>props.navigation.goBack()}/>
        </View> */}
        </ScrollView>
        </TouchableWithoutFeedback>
   </Container>
  )
}

export default Message

const styles = StyleSheet.create({
    inputview:{borderWidth:0,marginTop:hp(4.5),marginHorizontal:wp(5),
        marginHorizontal:wp(5),
        justifyContent:'center',
        alignContent:'center'  },
        saveview:{
            borderWidth:0,borderRadius:8,paddingHorizontal:wp(10),padding:10,borderColor:Colors.borderColor,backgroundColor:Colors.primary
        },
        btnviewmain:{
            borderWidth:0,marginTop:hp(3),borderColor:'red',marginHorizontal:wp(5),alignItems:'flex-end',
        },
        rowview:{
            borderWidth:0,marginTop:hp(2),flexDirection:'row',marginHorizontal:wp(5),
            alignItems:'center'
        },
        text: {
            fontSize: 16,
            fontWeight: '500',
            color: Colors.balckText,
          },
        pptxt:{color:'black',fontSize:16,fontWeight:'700',marginLeft:5},
        dropdown:{
            borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),borderRadius:10  },
            btnview:{marginTop:hp(5),borderWidth:0,alignItems:'center',marginHorizontal:wp(5),justifyContent:'center'},

            graybckground: {
                borderWidth: 0,
                marginHorizontal: wp(3),
                marginTop: hp(6),
                padding: 10,
                backgroundColor: '#EFF2F8',
                borderRadius: 5,
              },
              rowview: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderWidth:0
              },
})