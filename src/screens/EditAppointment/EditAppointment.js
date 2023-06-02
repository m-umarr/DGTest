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

const EditAppointment = (props) => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  let data=[
    {
      date:'05/08/22',
      time:'15:52',
      name:'Johr'
    },
    {
      date:'05/08/22',
      time:'15:52',
      name:'Johr'
    },
    {
      date:'05/08/22',
      time:'15:52',
      name:'Johr'
    },
    {
      date:'05/08/22',
      time:'15:52',
      name:'Johr'
    },
    {
      date:'05/08/22',
      time:'15:52',
      name:'Johr'
    },
    {
      date:'05/08/22',
      time:'15:52',
      name:'Johr'
    },
  ]
  const renderItem=({item,index})=>{
    return(
      <View style={{...styles.headinsg1, backgroundColor:index%2==0?'#E4E6EC':'white'}}> 
      <View style={styles.datevie1}>
      <ResponsiveText style={styles.headingtxt1}>
            {item.date}
          </ResponsiveText>
      </View>
     
      <View style={styles.datevie1}>
      <ResponsiveText style={styles.headingtxt1}>
            {item.time}
          </ResponsiveText>
      </View>
      <View style={styles.datevie1}>
      <ResponsiveText style={styles.headingtxt1}>
            {item.name}
          </ResponsiveText>
      </View>
      <View style={{...styles.actionview,}}>
        {/* <TouchableOpacity onPress={()=>props.navigation.navigate('EditAppointment')}>
      <Icon
                          name="edit"
                          size={22}
                          color={Colors.primary}
                        />
                        </TouchableOpacity> */}
        <TouchableOpacity>

<Icons icon={Images.delete}
 style={{width:wp(5),height:wp(5)}}/>
</TouchableOpacity>
{/* <TouchableOpacity onPress={()=>props.navigation.navigate('BookAppointment')}>

<Icons icon={Images.edit}
 style={{width:wp(5),height:wp(5)}}/>
</TouchableOpacity>
       */}
      </View>
             
      </View>
    )
  }

  const ListHeaderComponent = () => {
    return (
      <View style={styles.headinsg}> 
 <View style={styles.datevie}>
 <ResponsiveText style={styles.headingtxt}>
       {'Date'}
     </ResponsiveText>
 </View>

 <View style={styles.datevie}>
 <ResponsiveText style={styles.headingtxt}>
       {'Time'}
     </ResponsiveText>
 </View>
 <View style={styles.datevie}>
 <ResponsiveText style={styles.headingtxt}>
       {'Patient'}
     </ResponsiveText>
 </View>
 <View style={{...styles.datevie,}}>
 <ResponsiveText style={styles.headingtxt}>
       {''}
     </ResponsiveText>
 </View>
            
 </View>

    );
  };

  const ConceltentFooter=()=>{
    return(
      <View style={styles.footerstyle}/>

     
    )
    }
  return (
    <Container backgroundColor={Colors.statusbarcolor}>
        <Simpleheader
        title={'Edit Appointment'}
        navigation={props.navigation}/>
       <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.dropdown}>
  <Dropdown
  data={countries}
  borderColor={Colors.borderColor}
  width={wp(90)}
  defaultButtonText={'Status'}
  textcolor={Colors.grayText}
  onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  />
</View>
<View style={styles.inputview}>
        <InputField
        placeholder={'Room'}
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
  defaultButtonText={'Verification'}
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
  defaultButtonText={'Copy'}
  textcolor={Colors.grayText}
  onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
  />
</View>

        <View style={styles.inputview}>
        <InputField
        placeholder={'Balance'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>
    
   <View style={styles.rowview}>
   <ResponsiveText style={styles.pptxt}>
            {'PP'}
          </ResponsiveText>
          <TouchableOpacity style={{marginLeft:10}}>
          <Icon
                          name="check-box-outline-blank"
                          //check-box
                          size={18}
                          color={Colors.BtnBackground}
                        
                        />
   </TouchableOpacity>
   </View>
   <View style={styles.inputview}>
        <CommentsInput
        placeholder={'Staff Comment'}
        // value={''}
        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        height={hp(10)}
        
        />
        </View>
        <View style={styles.btnviewmain}>
            <TouchableOpacity style={styles.saveview}>
            <ResponsiveText style={{...styles.pptxt,color:Colors.textColorWhite}}>
            {'Save'}
          </ResponsiveText>
            </TouchableOpacity>
        </View>
      
 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
 <FlatList
               showsVerticalScrollIndicator={false}
               listKey={item => item.value.toString()}
               data={data}
             
               ListHeaderComponent={ListHeaderComponent}
               ListFooterComponent={ConceltentFooter}

               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
             />
</ScrollView>
 <View style={styles.btnview}>
            <Button
            title={'Update Booking'}
            onPress={()=>props.navigation.goBack()}/>
        </View>
        </ScrollView>
        </TouchableWithoutFeedback>
   </Container>
  )
}

export default EditAppointment

const styles = StyleSheet.create({
    inputview:{borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),
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
        pptxt:{color:'black',fontSize:16,fontWeight:'700',marginLeft:5},
        dropdown:{
            borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),borderRadius:10  },
            btnview:{marginTop:hp(5),borderWidth:0,alignItems:'center',marginHorizontal:wp(5),justifyContent:'center'},

            /////table start

            headinsg1:{
              borderWidth:0,
              marginHorizontal:wp(3),
              flexDirection:'row',
               marginLeft:wp(10),
              alignSelf:'center',
            },
            headingtxt1:{
              fontSize:12,fontWeight:'700',color:Colors.balckText
            },
            datevie1:{
              borderWidth:1,
              paddingVertical:2,
              width:wp(20),
              alignItems:'center',
              borderColor:Colors.borderColor,
            
            },
            actionview:{
              paddingVertical:2,
              width:wp(20),
              borderWidth:1,
              alignItems:'center',
              flexDirection:'row',
              justifyContent:'space-evenly',
              borderColor:Colors.borderColor
          
            },
            datetxt:{fontSize:16,color:Colors.balckText,fontWeight:'600'},
            headinsg:{
              borderWidth:0,
              marginLeft:wp(10),

              backgroundColor:Colors.primary,
              marginHorizontal:wp(2.9),marginTop:hp(3),
              alignSelf:'center'
          ,
              flexDirection:'row',
        
            },
            datevie:{
              borderWidth:1,
              paddingVertical:2,
              width:wp(20),
              alignItems:'center',
              borderColor:Colors.borderColor
            },
            headingtxt:{
              fontSize:14,fontWeight:'700',color:'white'
            },
            /////table end
})